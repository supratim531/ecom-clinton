import { useAuth } from "./useAuth";
import { useRefreshToken } from "./useRefreshToken";
import { privateAxios } from "../axios/axios";
import { useEffect } from "react";

export const usePrivateAxios = () => {
  const { auth } = useAuth();
  const getNewAccessToken = useRefreshToken();

  useEffect(() => {
    const requestInterceptor = privateAxios.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }

        return config;
      },
      (err) => Promise.reject(err)
    );

    const responseInterceptor = privateAxios.interceptors.response.use(
      async (res) => {
        return res;
      },
      async (err) => {
        const prevRequest = err?.config;

        if ([401, 403].includes(err?.response?.status) && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await getNewAccessToken();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          return privateAxios(prevRequest);
        } else {
          return Promise.reject(err);
        }
      }
    );

    return () => {
      privateAxios.interceptors.request.eject(requestInterceptor);
      privateAxios.interceptors.response.eject(responseInterceptor);
    };
  }, [auth, getNewAccessToken]);

  return privateAxios;
};

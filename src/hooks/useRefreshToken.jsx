import { jwtDecode } from "jwt-decode";
import { useAuth } from "./useAuth";
import axios from "../axios/axios";

export const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const getNewAccessToken = async () => {
    const res = await axios.get("/auth/refresh-token/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
      },
    });
    console.log({ res });
    const { data } = res;
    console.log({ data });
    const newAccessToken = data?.token?.access_token;
    const decodedToken = jwtDecode(newAccessToken);

    setAuth((prev) => {
      console.log("prev accessToken:", prev?.accessToken);
      console.log("new accessToken:", newAccessToken);
      return { ...prev, accessToken: newAccessToken, user: decodedToken };
    });

    return newAccessToken;
  };

  return getNewAccessToken;
};

import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useRefreshToken } from "../hooks";

/**
 * @author Supratim Majumder
 * @description This component is the exact same copy of @function PersistLogin
 */
export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth, setAuth } = useAuth();
  const getNewAccessToken = useRefreshToken();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await getNewAccessToken();
      } catch (err) {
        console.log({ err });
        setAuth({});
        localStorage.removeItem("refreshToken");
        navigate("/login", { state: { from: location }, replace: true });
      } finally {
        setIsLoading(false);
      }
    };

    !auth?.user?.exp ||
    (auth?.user?.exp &&
      +auth?.user?.exp < +(new Date().valueOf() / 1000).toFixed())
      ? verifyRefreshToken()
      : setIsLoading(false);

    // eslint-disable-next-line
  }, [location.pathname]);

  useEffect(() => {
    console.log("loading:", isLoading);
    console.log("accessToken:", auth?.accessToken);

    if (auth?.user?.exp) {
      +auth?.user?.exp < +(new Date().valueOf() / 1000).toFixed()
        ? console.log("Access token expired")
        : console.log("Access token alive");
    }

    // eslint-disable-next-line
  }, [isLoading]);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

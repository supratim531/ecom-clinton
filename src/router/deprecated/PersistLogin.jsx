import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRefreshToken } from "../../hooks/useRefreshToken";
import { useAuth } from "../../hooks/useAuth";

/**
 * @deprecated
 * @author Supratim Majumder
 */
export const PersistLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth, persist } = useAuth();
  const getNewAccessToken = useRefreshToken();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await getNewAccessToken();
      } catch (err) {
        console.log({ err });
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

    // eslint-disable-next-line
  }, [isLoading]);

  return (
    <>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>
  );
};

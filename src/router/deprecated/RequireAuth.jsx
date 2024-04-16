import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

/**
 * @deprecated
 * @copyright Dave Gray
 * @author Supratim Majumder
 */
const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log("location:", location);

  return auth?.accessToken && auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to={"login"} state={{ from: location }} replace />
  );
};

export default RequireAuth;

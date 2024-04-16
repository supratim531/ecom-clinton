import { useContext, useDebugValue } from "react";
import AuthContext from "../contexts/AuthContext";

/**
 * @copyright Dave Gray
 * @author Supratim Majumder
 * @description It gives us state of AuthContext in one go
 */
export const useAuth = () => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (auth) => {
    return auth?.accessToken ? "Logged In" : "Logged Out";
  });

  return useContext(AuthContext);
};

import { useAuth } from "./";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * @copyright Dave Gray
 * @author Supratim Majumder
 */
const useLogout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = async () => {
    // ...If any logout end-point exists in backend then implement here with try-catch, hence left off with async type function.

    setAuth({});
    localStorage.removeItem("refreshToken");
    navigate("/login", { state: { from: location }, replace: true });
  };

  return logout;
};

export default useLogout;

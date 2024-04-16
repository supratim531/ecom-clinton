import { createContext, useState } from "react";

const AuthContext = createContext({});

/**
 * @copyright Dave Gray
 * @author Supratim Majumder
 * @description It is providing auth state globally (<App />)
 */
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem("_persist")) || false
  );

  return (
    <AuthContext.Provider
      value={{
        auth,
        persist,
        setAuth,
        setPersist,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

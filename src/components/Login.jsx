import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "../axios/axios";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const errorRef = useRef();
  const inputRef = useRef();
  const { setAuth, persist, setPersist } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = location.state?.from?.pathname || "/";
  const finalFromLocation = ["/login", "/register"].includes(fromLocation)
    ? "/"
    : fromLocation;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const login = async (payload) => {
    try {
      const res = await axios.post("/auth/login/", payload);
      console.log({ res });
      const { data } = res;
      console.log({ data });
      const accessToken = data?.token?.access_token;
      const decodedTokenInfo = jwtDecode(accessToken);
      setFormData({ email: "", password: "" });
      setAuth({ accessToken, user: decodedTokenInfo });

      if (persist) {
        localStorage.setItem("refreshToken", data?.token?.refresh_token);
      } else {
        localStorage.removeItem("refreshToken");
      }

      navigate(finalFromLocation, { replace: true });
    } catch (err) {
      errorRef.current.focus();
      console.log({ err });

      if (!err?.response?.data?.message) {
        setErrorMessage("No Server Response");
      } else {
        setErrorMessage(err?.response?.data?.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if button somehow enabled (hacked) by client-side JS
    const v1 = formData.email;
    const v2 = formData.password;

    if (!v1 || !v2) {
      errorRef.current.focus();
      setErrorMessage("Invalid Entry");
      return;
    } else {
      setIsLoading(true);
      console.log(formData);
      login(formData);
    }
  };

  const handleFormDataChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePersist = (e) => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [formData.email, formData.password]);

  useEffect(() => {
    localStorage.setItem("_persist", JSON.stringify(persist));
  }, [persist]);

  useEffect(() => {
    console.log("Login request has been sent from:", fromLocation);
  }, [fromLocation]);

  return (
    <section className="login px-4 py-16 text-[1rem] bg-white">
      <section className="login-container text-[0.7rem] min-[320px]:text-[0.9rem] sm:text-base px-6 py-7 max-w-lg mx-auto rounded-md border shadow-md border-slate-200">
        <p
          ref={errorRef}
          className={
            errorMessage
              ? "px-4 py-2 my-2 rounded text-red-600 bg-red-200"
              : "hidden"
          }
          aria-live="assertive"
        >
          {errorMessage}
        </p>
        <h2 className="text-xl min-[480px]:text-2xl uppercase font-medium mb-1">
          Login
        </h2>
        <p className="capitalize text-gray-600 mb-6 text-[0.675rem] min-[320px]:text-[0.8rem]">
          welcome back customer
        </p>
        <form
          onSubmit={handleSubmit}
          className="text-[0.7rem] min-[320px]:text-[0.9rem] sm:text-base"
        >
          <div className="space-y-2">
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Email address
              </label>
              <input
                ref={inputRef}
                type="email"
                name="email"
                id="email"
                className="text-[0.75rem] xs:text-[0.85rem] min-[480px]:text-base block w-full border border-gray-300 px-2 py-1.5 min-[320px]:px-4 min-[320px]:py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="youremail@domain.com"
                required
                autoComplete="on"
                value={formData.email}
                onChange={handleFormDataChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-600 mb-2 block">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="text-[0.75rem] xs:text-[0.85rem] min-[480px]:text-base block w-full border border-gray-300 px-2 py-1.5 xs:px-4 xs:py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="********"
                required
                autoComplete="off"
                value={formData.password}
                onChange={handleFormDataChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                checked={persist}
                onChange={togglePersist}
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                Remember me
              </label>
            </div>
          </div>
          <div className="mt-4">
            <button
              disabled={isLoading}
              type="submit"
              className={
                isLoading
                  ? "opacity-70 w-full py-2 rounded text-white border border-primary bg-primary"
                  : "w-full py-2 uppercase font-roboto font-medium text-center rounded transition border border-primary text-white bg-primary hover:text-primary hover:bg-transparent"
              }
            >
              {isLoading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-5 h-5 text-white animate-spin fill-primary"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                <div>Login</div>
              )}
            </button>
          </div>
        </form>

        {/* login with */}
        {/* <div className="mt-6 flex justify-center relative">
          <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
            Or login with
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200" />
        </div>
        <div className="mt-4 flex gap-4">
          <a
            href="#"
            className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
          >
            facebook
          </a>
          <a
            href="#"
            className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
          >
            google
          </a>
        </div> */}
        {/* ./login with */}

        <p className="mt-4 text-center text-gray-600">
          Don't have account?{" "}
          <Link to={"/register"}>
            <span className="text-primary">Register now</span>
          </Link>
        </p>
      </section>
    </section>
  );
};

export default Login;

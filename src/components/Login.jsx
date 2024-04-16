import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "../axios/axios";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const errRef = useRef();
  const userRef = useRef();
  const { setAuth, persist, setPersist } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = location.state?.from?.pathname || "/";
  const finalFromLocation = ["/login", "/register"].includes(fromLocation)
    ? "/"
    : fromLocation;

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const login = async (payload) => {
    try {
      const res = await axios.post("/auth/login/", payload);
      console.log({ res });
      const { data } = res;
      console.log({ data });
      const accessToken = data?.token?.access_token;
      const decodedTokenInfo = jwtDecode(accessToken);
      setData({ email: "", password: "" });
      setAuth({ accessToken, user: decodedTokenInfo });

      if (persist) {
        localStorage.setItem("refreshToken", data?.token?.refresh_token);
      } else {
        localStorage.removeItem("refreshToken");
      }

      navigate(finalFromLocation, { replace: true });
    } catch (err) {
      errRef.current.focus();
      console.log({ err });

      if (!err?.response?.data?.message) {
        setErrorMessage("No Server Response");
      } else {
        setErrorMessage(err?.response?.data?.message);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if button somehow enabled (hacked) by client-side JS
    const v1 = data.email;
    const v2 = data.password;

    if (!v1 || !v2) {
      errRef.current.focus();
      setErrorMessage("Invalid Entry");
      return;
    } else {
      console.log(data);
      login(data);
    }
  };

  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePersist = (e) => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [data.email, data.password]);

  useEffect(() => {
    localStorage.setItem("_persist", JSON.stringify(persist));
  }, [persist]);

  useEffect(() => {
    console.log("Login request has been sent from:", fromLocation);
  }, [fromLocation]);

  return (
    <section>
      <p
        ref={errRef}
        className={
          errorMessage
            ? "m-1 inline-block outline outline-1 rounded bg-red-300"
            : "hidden"
        }
        aria-live="assertive"
      >
        {errorMessage}
      </p>

      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="space-y-4">
          <legend>Login Form</legend>
          <p>
            <label htmlFor="email">Email: </label>
            <input
              ref={userRef}
              className="outline outline-1"
              id="email"
              name="email"
              type="email"
              autoComplete="on"
              required
              value={data.email}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="password">Password: </label>
            <input
              className="outline outline-1"
              id="password"
              name="password"
              type="password"
              autoComplete="off"
              required
              value={data.password}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="persist">Remember Me: </label>
            <input
              id="persist"
              name="persist"
              type="checkbox"
              checked={persist}
              onChange={togglePersist}
            />
          </p>
        </fieldset>
        <button
          type="submit"
          tabIndex={0}
          aria-label="Login"
          disabled={!data.email || !data.password ? true : false}
          className={
            !data.email || !data.password
              ? "opacity-50 my-2 px-2 outline outline-1 bg-gray-200"
              : "my-2 px-2 outline outline-1 bg-gray-200"
          }
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;

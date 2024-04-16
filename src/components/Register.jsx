import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { USERNAME_REGEX, PASSWORD_REGEX } from "../utils/constants";

const Register = () => {
  const errRef = useRef();
  const userRef = useRef();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [focusUsername, setFocusUsername] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [focusConfirmPassword, setFocusConfirmPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // if button somehow enabled (hacked) by client-side JS
    const v1 = USERNAME_REGEX.test(username);
    const v2 = PASSWORD_REGEX.test(password);
    const v3 = password === confirmPassword;

    if (!v1 || !v2 || !v3) {
      errRef.current.focus();
      setSuccessMessage("");
      setErrorMessage("Invalid Entry");
      return;
    } else {
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setSuccessMessage("Registration Successful");
    }
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidUsername(USERNAME_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidConfirmPassword(password === confirmPassword);
  }, [password, confirmPassword]);

  useEffect(() => {
    setErrorMessage("");
  }, [username, password, confirmPassword]);

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

      <p
        className={
          successMessage
            ? "m-1 inline-block outline outline-1 rounded bg-green-300"
            : "hidden"
        }
        aria-live="assertive"
      >
        {successMessage}
      </p>

      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="space-y-4">
          <legend>Registration Form</legend>
          <p>
            <label htmlFor="username">
              Username:&nbsp;
              <span
                className={validUsername ? "mx-2 text-green-600" : "hidden"}
              >
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span
                className={
                  validUsername || !username ? "hidden" : "mx-2 text-red-600"
                }
              >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              ref={userRef}
              className="outline outline-1"
              id="username"
              type="text"
              autoComplete="on"
              required
              aria-invalid={!validUsername}
              aria-describedby="uidnote"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setFocusUsername(true)}
              onBlur={() => setFocusUsername(false)}
            />
            <br />
            <span
              id="uidnote"
              className={
                username && !validUsername && focusUsername
                  ? "mt-2 inline-block outline outline-1 rounded bg-red-300"
                  : "hidden"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores and hyphens are allowed.
            </span>
          </p>
          <p>
            <label htmlFor="password">
              Password:&nbsp;
              <span
                className={validPassword ? "mx-2 text-green-600" : "hidden"}
              >
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span
                className={
                  validPassword || !password ? "hidden" : "mx-2 text-red-600"
                }
              >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              className="outline outline-1"
              id="password"
              type="password"
              autoComplete="off"
              required
              aria-invalid={!validPassword}
              aria-describedby="pwdnote"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusPassword(true)}
              onBlur={() => setFocusPassword(false)}
            />
            <br />
            <span
              id="pwdnote"
              className={
                password && !validPassword && focusPassword
                  ? "mt-2 inline-block outline outline-1 rounded bg-red-300"
                  : "hidden"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must includes uppercase, lowercase, numbers and special
              characters.
              <br />
              Allowed special characters: !@$%
            </span>
          </p>
          <p>
            <label htmlFor="confirmPassword">
              Confirm Password:&nbsp;
              <span
                className={
                  validConfirmPassword && confirmPassword
                    ? "mx-2 text-green-600"
                    : "hidden"
                }
              >
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span
                className={
                  validConfirmPassword || !confirmPassword
                    ? "hidden"
                    : "mx-2 text-red-600"
                }
              >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              className="outline outline-1"
              id="confirmPassword"
              type="password"
              autoComplete="off"
              required
              aria-invalid={!validConfirmPassword}
              aria-describedby="cnfpwdnote"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() => setFocusConfirmPassword(true)}
              onBlur={() => setFocusConfirmPassword(false)}
            />
            <br />
            <span
              id="cnfpwdnote"
              className={
                confirmPassword && !validConfirmPassword && focusConfirmPassword
                  ? "mt-2 inline-block outline outline-1 rounded bg-red-300"
                  : "hidden"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Confirm password didn't match.
            </span>
          </p>
        </fieldset>
        <button
          type="submit"
          tabIndex={0}
          aria-label="Register"
          disabled={
            !validUsername || !validPassword || !validConfirmPassword
              ? true
              : false
          }
          className={
            !validUsername || !validPassword || !validConfirmPassword
              ? "opacity-50 my-2 px-2 outline outline-1 bg-gray-200"
              : "my-2 px-2 outline outline-1 bg-gray-200"
          }
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { USERNAME_REGEX, PASSWORD_REGEX } from "../utils/constants";
import { Link } from "react-router-dom";

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
    userRef.current && userRef.current.focus();
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
    // <section>
    //   <p
    //     ref={errRef}
    //     className={
    //       errorMessage
    //         ? "m-1 inline-block outline outline-1 rounded bg-red-300"
    //         : "hidden"
    //     }
    //     aria-live="assertive"
    //   >
    //     {errorMessage}
    //   </p>

    //   <p
    //     className={
    //       successMessage
    //         ? "m-1 inline-block outline outline-1 rounded bg-green-300"
    //         : "hidden"
    //     }
    //     aria-live="assertive"
    //   >
    //     {successMessage}
    //   </p>

    //   <h2>User Registration</h2>
    //   <form onSubmit={handleSubmit}>
    //     <fieldset className="space-y-4">
    //       <legend>Registration Form</legend>
    //       <p>
    //         <label htmlFor="username">
    //           Username:&nbsp;
    //           <span
    //             className={validUsername ? "mx-2 text-green-600" : "hidden"}
    //           >
    //             <FontAwesomeIcon icon={faCheck} />
    //           </span>
    //           <span
    //             className={
    //               validUsername || !username ? "hidden" : "mx-2 text-red-600"
    //             }
    //           >
    //             <FontAwesomeIcon icon={faTimes} />
    //           </span>
    //         </label>
    //         <input
    //           ref={userRef}
    //           className="outline outline-1"
    //           id="username"
    //           type="text"
    //           autoComplete="on"
    //           required
    //           aria-invalid={!validUsername}
    //           aria-describedby="uidnote"
    //           value={username}
    //           onChange={(e) => setUsername(e.target.value)}
    //           onFocus={() => setFocusUsername(true)}
    //           onBlur={() => setFocusUsername(false)}
    //         />
    //         <br />
    //         <span
    //           id="uidnote"
    //           className={
    //             username && !validUsername && focusUsername
    //               ? "mt-2 inline-block outline outline-1 rounded bg-red-300"
    //               : "hidden"
    //           }
    //         >
    //           <FontAwesomeIcon icon={faInfoCircle} />
    //           4 to 24 characters.
    //           <br />
    //           Must begin with a letter.
    //           <br />
    //           Letters, numbers, underscores and hyphens are allowed.
    //         </span>
    //       </p>
    //       <p>
    //         <label htmlFor="password">
    //           Password:&nbsp;
    //           <span
    //             className={validPassword ? "mx-2 text-green-600" : "hidden"}
    //           >
    //             <FontAwesomeIcon icon={faCheck} />
    //           </span>
    //           <span
    //             className={
    //               validPassword || !password ? "hidden" : "mx-2 text-red-600"
    //             }
    //           >
    //             <FontAwesomeIcon icon={faTimes} />
    //           </span>
    //         </label>
    //         <input
    //           className="outline outline-1"
    //           id="password"
    //           type="password"
    //           autoComplete="off"
    //           required
    //           aria-invalid={!validPassword}
    //           aria-describedby="pwdnote"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           onFocus={() => setFocusPassword(true)}
    //           onBlur={() => setFocusPassword(false)}
    //         />
    //         <br />
    //         <span
    //           id="pwdnote"
    //           className={
    //             password && !validPassword && focusPassword
    //               ? "mt-2 inline-block outline outline-1 rounded bg-red-300"
    //               : "hidden"
    //           }
    //         >
    //           <FontAwesomeIcon icon={faInfoCircle} />
    //           8 to 24 characters.
    //           <br />
    //           Must includes uppercase, lowercase, numbers and special
    //           characters.
    //           <br />
    //           Allowed special characters: !@$%
    //         </span>
    //       </p>
    //       <p>
    //         <label htmlFor="confirmPassword">
    //           Confirm Password:&nbsp;
    //           <span
    //             className={
    //               validConfirmPassword && confirmPassword
    //                 ? "mx-2 text-green-600"
    //                 : "hidden"
    //             }
    //           >
    //             <FontAwesomeIcon icon={faCheck} />
    //           </span>
    //           <span
    //             className={
    //               validConfirmPassword || !confirmPassword
    //                 ? "hidden"
    //                 : "mx-2 text-red-600"
    //             }
    //           >
    //             <FontAwesomeIcon icon={faTimes} />
    //           </span>
    //         </label>
    //         <input
    //           className="outline outline-1"
    //           id="confirmPassword"
    //           type="password"
    //           autoComplete="off"
    //           required
    //           aria-invalid={!validConfirmPassword}
    //           aria-describedby="cnfpwdnote"
    //           value={confirmPassword}
    //           onChange={(e) => setConfirmPassword(e.target.value)}
    //           onFocus={() => setFocusConfirmPassword(true)}
    //           onBlur={() => setFocusConfirmPassword(false)}
    //         />
    //         <br />
    //         <span
    //           id="cnfpwdnote"
    //           className={
    //             confirmPassword && !validConfirmPassword && focusConfirmPassword
    //               ? "mt-2 inline-block outline outline-1 rounded bg-red-300"
    //               : "hidden"
    //           }
    //         >
    //           <FontAwesomeIcon icon={faInfoCircle} />
    //           Confirm password didn't match.
    //         </span>
    //       </p>
    //     </fieldset>
    //     <button
    //       type="submit"
    //       tabIndex={0}
    //       aria-label="Register"
    //       disabled={
    //         !validUsername || !validPassword || !validConfirmPassword
    //           ? true
    //           : false
    //       }
    //       className={
    //         !validUsername || !validPassword || !validConfirmPassword
    //           ? "opacity-50 my-2 px-2 outline outline-1 bg-gray-200"
    //           : "my-2 px-2 outline outline-1 bg-gray-200"
    //       }
    //     >
    //       Register
    //     </button>
    //   </form>
    // </section>

    <section className="register text-[1rem] px-4 py-16 bg-white">
      <section className="register-container text-[0.7rem] min-[320px]:text-[0.9rem] sm:text-base px-6 py-7 max-w-lg mx-auto rounded-md border shadow-md border-slate-200">
        <h2 className="text-xl min-[480px]:text-2xl uppercase font-medium mb-1">
          Create an account
        </h2>
        <p className="capitalize text-gray-600 mb-6 text-[0.675rem] min-[320px]:text-[0.8rem]">
          welcome to our shop
        </p>
        <form className="text-[0.7rem] min-[320px]:text-[0.9rem] sm:text-base">
          <div className="space-y-2">
            <div>
              <label htmlFor="firstName" className="text-gray-600 mb-2 block">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="text-[0.75rem] xs:text-[0.85rem] min-[480px]:text-base block w-full border border-gray-300 px-2 py-1.5 min-[320px]:px-4 min-[320px]:py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="John"
                autoComplete="on"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="text-gray-600 mb-2 block">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="text-[0.75rem] xs:text-[0.85rem] min-[480px]:text-base block w-full border border-gray-300 px-2 py-1.5 min-[320px]:px-4 min-[320px]:py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="Doe"
                autoComplete="on"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-gray-600 mb-2 block">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="text-[0.75rem] xs:text-[0.85rem] min-[480px]:text-base block w-full border border-gray-300 px-2 py-1.5 min-[320px]:px-4 min-[320px]:py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="Your 10 digit phone number"
                autoComplete="on"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="text-[0.75rem] xs:text-[0.85rem] min-[480px]:text-base block w-full border border-gray-300 px-2 py-1.5 min-[320px]:px-4 min-[320px]:py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="youremail@domain.com"
                autoComplete="on"
                required
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
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
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
              type="submit"
              className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              Create Account
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
          Already have account?{" "}
          <Link to={"/login"}>
            <span className="text-primary">Login now</span>
          </Link>
        </p>
      </section>
    </section>
  );
};

export default Register;

import { useRef, useEffect } from "react";

const noOp = () => null;
const isAbortControllerSupported = window.hasOwnProperty("AbortController");
const initAbortController = () =>
  isAbortControllerSupported
    ? new AbortController()
    : { abort: noOp, signal: {} };

/**
 * @copyright https://medium.com
 * @author Supratim Majumder
 * @description It aborts the request (async axios request) when any related component unmounts
 * @link https://medium.com/doctolib/react-stop-checking-if-your-component-is-mounted-3bb2568a4934
 */
const useAbortController = (shouldAutoRestart = false) => {
  const abortController = useRef(initAbortController());

  useEffect(() => {
    if (shouldAutoRestart && abortController.current.signal.aborted) {
      abortController.current = initAbortController();
    }

    console.log(abortController.current);

    // eslint-disable-next-line
  }, [abortController.current.signal.aborted]);

  useEffect(() => () => abortController.current.abort(), []);

  return abortController.current;
};

export default useAbortController;

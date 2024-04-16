import React from "react";
import { useRefreshToken } from "../hooks/useRefreshToken";

const Home = () => {
  const getNewAccessToken = useRefreshToken();

  return (
    <section>
      <h2>Home</h2>
      <p>This is Home Page.</p>

      <button
        tabIndex={0}
        aria-label="Get New Access Token"
        onClick={getNewAccessToken}
        className="my-2 px-2 outline outline-1 bg-gray-200"
      >
        Refresh Token
      </button>
    </section>
  );
};

export default Home;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import Profile from "./components/designs/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Profile></Profile>);
root.render(<RouterProvider router={router} />);

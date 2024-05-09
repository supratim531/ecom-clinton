import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Page404 from "../pages/Page404";
import { ProtectedRoute } from "./ProtectedRoute";
import Product from "../pages/Product";
import Products from "../pages/Products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* public routes */}
      <Route index element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="products" element={<Products />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* we want to protect these routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* catch all */}
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

export default router;

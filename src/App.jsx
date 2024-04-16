import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AuthProvider>
  );
}

export default App;

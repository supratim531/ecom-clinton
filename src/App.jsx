import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/header/Header";

function App() {
  return (
    <AuthProvider>
      <section className="flex flex-col min-h-[100vh]">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </section>
    </AuthProvider>
  );
}

export default App;

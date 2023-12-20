import React from "react";
import Navbar from "./components/navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import { AppProvider } from "./components/context.jsx";
import Form from "./components/form.jsx";
function App() {
  return (
    <>
      <AppProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </AppProvider>
    </>
  );
}
export default App;

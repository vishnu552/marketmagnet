import Opportunities from "./components/Opportunities";
import "./App.css";
import RegisterForm from "./components/registerForm";
import LoginPage from "./components/loginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Desktop from "./components/desktop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Opportunities />} />
          <Route path="signup" element={<RegisterForm />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="desktop" element={<Desktop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import Opportunities from "./components/Opportunities";
import "./App.css";
import RegisterForm from "./components/registerForm";
import LoginPage from "./components/loginForm";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<RegisterForm />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      <ul>
        <li>
          <Link to="/signup"></Link>
        </li>
        <li>
          <Link to="/login"></Link>
        </li>
      </ul>
      <Opportunities />
      <RegisterForm />
      <LoginPage />
    </>
  );
}

export default App;

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Opportunities from "./pages/Opportunities.jsx";
import Home from "./pages/Home.jsx";
import Partner from "./pages/Partner.jsx";
import Success from "./pages/success.jsx";
import Register from "./pages/Register.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Discl from "./pages/discl.jsx";
import Privacy from "./pages/privacy.jsx";
import Terms from "./pages/terms.jsx";
import LifeInsurance from "./components/LifeInsurance.jsx";
import GeneralInsurance from "./components/GeneralInsurance.jsx";
import HealthInsurance from "./components/HealthInsurance.jsx";
import ScrollToTop from "./components/ScrolltoTop.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LoginSingup from "./components/LoginSingup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      // {
      //   path: "/insurance",
      //   element: <Insure />,
      // },
      {
        path: "/opportunities",
        element: <Opportunities />,
      },
      {
        path: "/opportunities/lifeinsurance",
        element: <LifeInsurance />,
      },
      {
        path: "/opportunities/healthinsurance",
        element: <HealthInsurance />,
      },
      {
        path: "/opportunities/GenralInsurance",
        element: <GeneralInsurance />,
      },
      {
        path: "/becomepartner",
        element: <Partner />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/discl",
        element: <Discl />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      { path: "/success", element: <Success /> },
      { path: "loginsignup", element: <LoginSingup /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);

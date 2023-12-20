import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Insure from "./components/insure.jsx";
import Opportunities from "./pages/Opportunities.jsx";
import Home from "./pages/Home.jsx";
import Insider from "./components/insider.jsx";
import Partner from "./pages/Partner.jsx";
import Success from "./pages/success.jsx";
import Register from "./pages/Register.jsx";

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
        path: "/insurance",
        element: <Insure />,
      },
      {
        path: "/opportunities",
        element: <Opportunities />,
      },
      {
        path: "/opportunities/:id",
        element: <Insider />,
      },
      {
        path: "/becomepartner",
        element: <Partner />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      { path: "/success", element: <Success /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

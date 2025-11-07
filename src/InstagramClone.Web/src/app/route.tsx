import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "../pages/login/ui/login-page";
import InitialPage from "./layouts/layout";
import Home from "@/pages/home/ui/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <LoginPage /> },
      {
        path: "",
        element: <InitialPage />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "home",
            element: <div></div>,
          },
        ],
      },
    ],
  },
]);

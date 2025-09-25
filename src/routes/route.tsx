import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../login/pages/login-page";
import App from "../App";
import HomePage from "../home/pages/layout";
import Feed from "../feed/components/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <LoginPage /> },
      {
        path: "",
        element: <HomePage />,
        children: [
          {
            path: "",
            element: <Feed />,
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

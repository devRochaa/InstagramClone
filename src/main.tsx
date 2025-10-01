import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/route.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

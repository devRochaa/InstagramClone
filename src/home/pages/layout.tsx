import React from "react";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";

const InitialPage = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-[18%_55%_27%]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default InitialPage;

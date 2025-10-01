import React from "react";
import Sidebar from "../../widgets/sidebar/ui/sidebar";
import { Outlet } from "react-router-dom";

const InitialPage = () => {
  return (
    <div className="bg-black min-h-screen w-full grid grid-cols-[18%_55%_27%]">
      <div className="relative">
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default InitialPage;

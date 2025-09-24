import React from "react";
import Sidebar from "../components/sidebar";
import StoriesRow from "../components/stories-row";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-[18%_55%_27%]">
      <Sidebar />
      <div className="bg-black grid grid-rows-[0.23fr_0.77fr]">
        <StoriesRow />
        <div className="bg-black"></div>
      </div>
      <div className="bg-green-700"></div>
    </div>
  );
};

export default HomePage;

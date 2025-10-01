import React from "react";
import { StoriesRow, Feed, HomeSuggestions } from "@/pages/home";

const Home = () => {
  return (
    <>
      <div className="bg-black flex flex-col gap-2 min-h-screen">
        <div>
          <StoriesRow />
        </div>
        <div>
          <Feed />
        </div>
      </div>
      <HomeSuggestions />
    </>
  );
};

export default Home;

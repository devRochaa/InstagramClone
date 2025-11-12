import React from "react";
import { StoriesRow, Feed, HomeSuggestions } from "@/pages/home";
import StoriesOpened from "@/entities/stories/ui/stories-opened";

const Home = () => {
  return (
    <>
    <StoriesOpened/>
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

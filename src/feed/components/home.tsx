import React from "react";
import StoriesRow from "./stories-row";
import Feed from "./feed";
import HomeSuggestions from "./home-suggestions";

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

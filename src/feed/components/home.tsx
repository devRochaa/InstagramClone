import React from "react";
import StoriesRow from "./stories-row";
import Feed from "./feed";

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
      <div className="bg-green-700" id="sugestions"></div>
    </>
  );
};

export default Home;

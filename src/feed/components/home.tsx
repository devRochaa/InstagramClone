import React from "react";
import StoriesRow from "./stories-row";
import Feed from "./feed";

const Home = () => {
  return (
    <>
      <div className="bg-black grid grid-rows-[0.22fr_0.78fr] pl-8">
        <StoriesRow />
        <Feed />
      </div>
      <div className="bg-green-700" id="sugestions"></div>
    </>
  );
};

export default Home;

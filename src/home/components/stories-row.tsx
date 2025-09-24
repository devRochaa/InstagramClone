import React from "react";
import StoriesCard from "./stories-card";
// import profilePic from "../../img/fotoperfil.jpg";
import gatoazulPic from "../../img/gatoazul.jpg";

const StoriesRow = () => {
  return (
    <div className="border-b border-zinc-800 flex flex-row p-2 pl-18 gap-4">
      <StoriesCard photo={gatoazulPic} />
      <StoriesCard photo={gatoazulPic} />
    </div>
  );
};

export default StoriesRow;

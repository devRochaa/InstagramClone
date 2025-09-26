import React from "react";
import FeedCard from "./feed-card";
import gatoazulPic from "../../img/gatoazul.jpg";

const Feed = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-4">
      <FeedCard
        username="rochadaniel.o"
        profilePic={gatoazulPic}
        verified={true}
        timePast="33 min"
      />
      <FeedCard
        username="samuelrocha.o"
        profilePic={gatoazulPic}
        verified={true}
        timePast="33 min"
      />
      <FeedCard
        username="rochadaniel.o"
        profilePic={gatoazulPic}
        verified={true}
        timePast="33 min"
      />
      <FeedCard
        username="rochadaniel.o"
        profilePic={gatoazulPic}
        verified={true}
        timePast="33 min"
      />
      <FeedCard
        username="rochadaniel.o"
        profilePic={gatoazulPic}
        verified={true}
        timePast="33 min"
      />
    </div>
  );
};

export default Feed;

import React from "react";
import FeedCardHeader from "./feed-card-header";

type Props = {
  profilePic: string;
  username: string;
  verified: boolean;
  timePast: string;
};

const FeedCard = ({ profilePic, username, verified, timePast }: Props) => {
  return (
    <div className="bg-white w-116 h-142 text-zinc-100 mt-1">
      <FeedCardHeader
        profilePic={profilePic}
        username={username}
        verified={verified}
        timePast={timePast}
      />
    </div>
  );
};

export default FeedCard;

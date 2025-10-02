import React from "react";
import { MdVerified } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

type Props = {
  profilePic: string;
  username: string;
  verified: boolean;
  timePast: string;
};

const FeedCardHeader = ({
  profilePic,
  username,
  verified,
  timePast,
}: Props) => {
  return (
    <div className="bg-black w-full h-16 flex items-center gap-1.5">
      <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600">
        <div className="rounded-full p-[2px] bg-black">
          <img src={profilePic} alt="pfp" className="rounded-full w-10 h-10" />
        </div>
      </div>
      <p className="text-sm font-bold">{username}</p>
      {verified && <MdVerified color="#0095f6" />}
      <p className="text-sm text-text-lightgray font-bold">•</p>
      <p className="text-sm text-text-lightgray">{timePast}</p>
      <BsThreeDots size={20} className="ml-auto" />
    </div>
  );
};

export default FeedCardHeader;

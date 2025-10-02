import React from "react";

import { FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { FaRegSmile } from "react-icons/fa";
import FeedCardHeader from "./feed-card-header";
import { gatoazulPic } from "@/widgets/feed";
import { mugshotPic } from "@/widgets/stories";
import { pic } from "..";

type Props = {
  profilePic: string;
  username: string;
  verified: boolean;
  timePast: string;
};

const FeedCard = ({ profilePic, username, verified, timePast }: Props) => {
  return (
    <div className="bg-white w-116 h-166 text-zinc-100 border-b border-zinc-700">
      <FeedCardHeader
        profilePic={profilePic}
        username={username}
        verified={verified}
        timePast={timePast}
      />
      <img src={gatoazulPic} className="" alt="" />
      <div className="bg-black h-35 flex flex-col gap-1">
        {/* */}
        <div className="flex flex-row gap-3 pt-2">
          <FaRegHeart size={24} />
          <FaRegComment size={24} />
          <LuSend size={24} />
          <FaRegBookmark className="ml-auto" size={24} />
        </div>

        {/* */}
        <div className="flex flex-row gap-1 items-center pt-2">
          <div className="flex relative -space-x-2">
            <img
              src={gatoazulPic}
              className="w-4 h-4 rounded-full border-1 border-black"
              alt=""
            />
            <img
              src={mugshotPic}
              className="w-4 h-4 rounded-full border-1 border-black"
              alt=""
            />
            <img
              src={pic}
              className="w-4 h-4 rounded-full border-1 border-black"
              alt=""
            />
          </div>
          <p className="text-sm">
            Curtido por <span className="font-medium">dailycatmemes</span> e
            <span className="font-medium"> outras pessoas</span>
          </p>
        </div>

        {/* */}
        <div>
          <p className="text-sm">
            <span className="font-medium">daniel.delpezzo</span> Comentário
            falando algo aleatório 🐱‍👤
          </p>
        </div>

        {/* */}
        <div className="flex items-center">
          <p className="text-sm text-text-lightgray">
            Adicione um comentário...
          </p>
          <FaRegSmile color="#9f9fa9" size={15} className="ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;

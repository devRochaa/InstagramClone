import React from "react";

type Props = {
  pfp: string;
  username: string;
  followedBy: string;
  action: string;
};

const HomeFollowSuggestionCard = ({
  pfp,
  username,
  followedBy,
  action = "Seguir",
}: Props) => {
  return (
    <div className="bg-black h-13 flex flex-row items-center">
      <img src={pfp} className="rounded-full w-11 h-11" alt="" />
      <div className="pl-3 -space-y-0.2">
        <p className="text-sm font-medium text-white">{username}</p>
        <p className="text-xs text-text-lightgray">
          Seguido(a) por {followedBy}
        </p>
      </div>
      <div className="ml-auto">
        <p className="text-[#6f86d1] text-xs font-bold hover:cursor-pointer">{action}</p>
      </div>
    </div>
  );
};

export default HomeFollowSuggestionCard;

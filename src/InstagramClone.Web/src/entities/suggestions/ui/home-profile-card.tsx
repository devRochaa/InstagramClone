import React from "react";

type Props = {
  pfp: string;
  username: string;
  name: string;
  action?: string;
};

const HomeProfileCard = ({ pfp, username, name, action = "Mudar" }: Props) => {
  return (
    <div className="bg-black h-13 flex flex-row items-center">
      <img src={pfp} className="rounded-full w-11 h-11" alt="" />
      <div className="pl-3 -space-y-0.5">
        <p className="text-sm font-medium text-white">{username}</p>
        <p className="text-sm text-text-lightgray">{name}</p>
      </div>
      <div className="ml-auto">
        <p className="text-[#839FFC] text-xs font-bold hover:cursor-pointer">{action}</p>
      </div>
    </div>
  );
};

export default HomeProfileCard;

import React from "react";
import type { IconType } from "react-icons";
import { FaCircleUser } from "react-icons/fa6";

type Props = {
  icon?: IconType;
  text: string;
  size?: number;
  img?: string;
};

const SidebarCard = ({ icon = FaCircleUser, text, size = 30, img }: Props) => {
  console.log(icon);
  const CardIcon = icon;
  return (
    <>
      <div className="p-2 flex items-center gap-3 cursor-pointer rounded-lg transition-colors duration-300 hover:bg-neutral-900">
        <div className="pl-1 w-[17%] flex items-center justify-center">
          {img != null ? (
            <>
              <img
                src={img}
                className="rounded-full border border-amber-50"
                alt="perfil"
              />
            </>
          ) : (
            <CardIcon size={size} color="white" />
          )}
        </div>
        <p className="text-white">{text}</p>
      </div>
    </>
  );
};

export default SidebarCard;

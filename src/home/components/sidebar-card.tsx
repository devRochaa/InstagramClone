import React from "react";
import type { IconType } from "react-icons";
import { FaCircleUser } from "react-icons/fa6";

type Props = {
  icon?: IconType;
  text: string;
  size?: number;
  img?: string;
  active?: boolean;
};

const SidebarCard = ({
  icon = FaCircleUser,
  text,
  size = 30,
  img,
  active,
}: Props) => {
  console.log(icon);
  const CardIcon = icon;
  return (
    <>
      <div className="px-3 py-2 flex items-center gap-4 cursor-pointer rounded-lg transition-colors duration-200 hover:bg-neutral-900">
        <div className="w-[17%] flex items-center justify-center">
          {img != null ? (
            <>
              <img
                src={img}
                className="rounded-full border w-7 h-7 border-neutral-500"
                alt="perfil"
              />
            </>
          ) : (
            <CardIcon size={size} color="white" />
          )}
        </div>

        {active ? (
          <p className="text-white font-bold">{text}</p>
        ) : (
          <p className="text-white">{text}</p>
        )}
      </div>
    </>
  );
};

export default SidebarCard;

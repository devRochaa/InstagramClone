import React from "react";

import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCompass, FaRegHeart } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { LuSquarePlus } from "react-icons/lu";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

import SidebarCard from "./sidebar-card";
import { instaLogo, profilePic } from "..";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-[18%] bg-black px-2 py-4 flex flex-col justify-between border-r border-border-dark">
      <div className="border h-full flex flex-col gap-2.5">
        <div className="h-16 flex items-center pl-3 mb-4">
          <img src={instaLogo} alt="Instagram" className="w-26 h-14 invert" />
        </div>

        <SidebarCard icon={MdHomeFilled} text="Página inicial" active={true} />
        <SidebarCard icon={IoSearchOutline} text="Pesquisa" />
        <SidebarCard icon={FaRegCompass} size={24} text="Explorar" />
        <SidebarCard icon={FaClapperboard} size={23} text="Reels" />
        <SidebarCard icon={BiMessageRoundedCheck} text="Mensagens" />
        <SidebarCard icon={FaRegHeart} size={23} text="Notificações" />
        <SidebarCard icon={LuSquarePlus} size={25} text="Criar" />
        <SidebarCard img={profilePic} size={25} text="Perfil" />
      </div>
      <div className="flex flex-col gap-2 pt-2">
        <SidebarCard icon={AiOutlineMenu} size={25} text="Mais" />
        <SidebarCard
          icon={HiOutlineSquares2X2}
          size={25}
          text="Também da Meta"
        />
      </div>
    </div>
  );
};

export default Sidebar;

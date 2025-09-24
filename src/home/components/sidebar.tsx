import React from "react";
import instaLogo from "../../img/Instagram-Logo.png";
import SidebarCard from "./sidebar-card";
import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCompass, FaRegHeart } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { LuSquarePlus } from "react-icons/lu";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import profilePic from "../../img/fotoperfil.jpg";

const Sidebar = () => {
  return (
    <div className="bg-black pt-1.5 pl-2 pr-2 pb-2.5 grid grid-rows-[1fr_4fr_1fr] border-r border-zinc-800">
      <div className="h-full flex items-center pl-4">
        <img
          src={instaLogo}
          alt="Instagram"
          className="w-[49%] h-[56%] invert"
        />
      </div>
      <div className="border h-full flex flex-col gap-2.5">
        <SidebarCard icon={MdHomeFilled} text="Página inicial" />
        <SidebarCard icon={IoSearchOutline} text="Pesquisa" />
        <SidebarCard icon={FaRegCompass} size={24} text="Explorar" />
        <SidebarCard icon={FaClapperboard} size={23} text="Reels" />
        <SidebarCard icon={BiMessageRoundedCheck} text="Mensagens" />
        <SidebarCard icon={FaRegHeart} size={23} text="Notificações" />
        <SidebarCard icon={LuSquarePlus} size={25} text="Criar" />
        <SidebarCard img={profilePic} size={25} text="Perfil" />
      </div>
      <div className="border h-full flex flex-col gap-2 pt-2">
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

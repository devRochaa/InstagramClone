import React, {forwardRef } from "react";

type Props = {
  photo: string;
  username: string;
};

const StoriesCard =  forwardRef<HTMLDivElement, Props>(({ photo, username } : Props, ref) => {
  return (
    <>
      <div className="flex flex-col shrink-0 items-center justify-center cursor-pointer " ref={ref}>
        <div className="p-[3px] rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600">
          <div className="rounded-full p-[2px] bg-black">
            <img className="rounded-full w-19" src={photo} alt="Icone" />
          </div>
        </div>
        <p className="text-white text-sm">{username}</p>
      </div>
    </>
  );
});

export default StoriesCard;

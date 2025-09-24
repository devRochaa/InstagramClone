import React from "react";

type Props = {
  photo: string;
};

const StoriesCard = ({ photo }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="p-[3px] rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600">
          <div className="rounded-full p-[2px] bg-black">
            <img className="rounded-full w-20" src={photo} alt="Icone" />
          </div>
        </div>
        <p className="text-white text-sm">rocha</p>
      </div>
    </>
  );
};

export default StoriesCard;

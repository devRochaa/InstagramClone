import React, { useRef } from "react";
import StoriesCard from "./stories-card";
import mugshotPic from "../../img/istockphoto-672074756-mugshot.jpg";
import gatoazulPic from "../../img/gatoazul.jpg";
import gatopic from "../../img/foto.jpeg";

const StoriesRow = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -734, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 734, behavior: "smooth" });
  };

  const tamanho = Array(20).fill(null);

  return (
    <div className="flex w-full overflow-hidden py-3 px-15 items-center justify-center gap-3">
      {/* <div className="relative w-full min-h-max overflow-hidden border-b border-zinc-800 py-6 px-15"> */}
      <button
        // className="absolute w-6 h-6 left-12 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-2xl cursor-pointer font-sans"
        className=" w-6 h-6 -translate-y-1/2 z-10 bg-white rounded-full shadow-2xl cursor-pointer font-sans"
        onClick={scrollLeft}
      >
        {"<"}
      </button>

      <div
        ref={scrollRef}
        className="flex flex-row gap-5 overflow-x-scroll scrollbar-hide w-160"
      >
        {tamanho.map(() => {
          return (
            <>
              <StoriesCard photo={gatoazulPic} username="daniel" />
              <StoriesCard photo={mugshotPic} username="rocha" />
              <StoriesCard photo={gatopic} username="teste" />
            </>
          );
        })}
      </div>

      <button
        className="w-6 h-6 -translate-y-1/2 z-11 bg-white rounded-full shadow-2xl cursor-pointer"
        // className="absolute right-15 top-1/2 w-6 h-6 -translate-y-1/2 z-11 bg-white rounded-full shadow-2xl cursor-pointer"
        onClick={scrollRight}
      >
        {">"}
      </button>
    </div>
  );
};

export default StoriesRow;

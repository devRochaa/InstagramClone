import React, { useEffect, useRef, useState } from "react";
import { gatopic, mugshotPic, StoriesCard } from "..";

const storiesData = [
  { photo: mugshotPic, username: "daniel" },
  { photo: gatopic, username: "rocha" },
  { photo: mugshotPic, username: "teste1" },
  { photo: gatopic, username: "teste2" },
  { photo: mugshotPic, username: "teste3" },
  { photo: gatopic, username: "teste4" },
  { photo: mugshotPic, username: "daniel" },
  { photo: gatopic, username: "rocha" },
  { photo: mugshotPic, username: "teste1" },
  { photo: gatopic, username: "teste2" },
  { photo: mugshotPic, username: "teste3" },
  { photo: gatopic, username: "teste4" },
  { photo: mugshotPic, username: "daniel" },
  { photo: gatopic, username: "rocha" },
  { photo: mugshotPic, username: "teste1" },
  { photo: gatopic, username: "teste2" },
  { photo: mugshotPic, username: "teste3" },
  { photo: gatopic, username: "teste4" },
  { photo: gatopic, username: "teste4" },
  { photo: gatopic, username: "teste4" },
  { photo: gatopic, username: "teste4" },
  { photo: gatopic, username: "teste4" },
];

const StoriesRow = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // mede a largura de 1 card assim que monta
  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth + 20); // +20px do gap-5
    }
    checkScrollPosition();
  }, []);

  const checkScrollPosition = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    const remaining = scrollWidth - (scrollLeft + clientWidth);

    setCanScrollLeft(scrollLeft > 1);
    setCanScrollRight(scrollLeft + clientWidth - scrollWidth < remaining);
    console.log(scrollLeft, clientWidth, scrollLeft + clientWidth, scrollWidth);

    // -1 só pra evitar bug de arredondamento
  };

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    const step = cardWidth * 6;

    scrollRef.current?.scrollBy({ left: -step, behavior: "smooth" });
    setTimeout(checkScrollPosition, 300); // espera a animação
  };
  const scrollRight = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const step = cardWidth * 6;
    // quanto falta até o fim
    const remaining = scrollWidth - (scrollLeft + clientWidth);

    const move = remaining < step ? remaining : step;

    scrollRef.current?.scrollBy({ left: move, behavior: "smooth" });
    setTimeout(checkScrollPosition, 300);
  };

  return (
    <div className="flex w-full overflow-hidden pl-10 items-center justify-center gap-3 min-h-[170px]">
      {/* <div className="relative w-full min-h-max overflow-hidden border-b border-zinc-800 py-6 px-15"> */}
      <div className="relative flex items-center">
        {canScrollLeft && (
          <button
            // className="absolute w-6 h-6 left-12 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-2xl cursor-pointer font-sans"
            className="w-[24px] h-[24px] absolute -translate-y-1/2 z-10 bg-white rounded-full shadow-2xl cursor-pointer font-sans"
            onClick={scrollLeft}
          >
            {"<"}
          </button>
        )}
      </div>

      <div
        ref={scrollRef}
        className="flex flex-row gap-5 overflow-x-scroll scrollbar-hide w-155 mb-3 mr-9"
      >
        {storiesData.map((data, i) => {
          if (i == 0) {
            console.log("foi");

            return (
              <StoriesCard
                key={i}
                ref={cardRef}
                photo={data.photo}
                username={data.username}
              />
            );
          }
          return (
            <StoriesCard key={i} photo={data.photo} username={data.username} />
          );
        })}
      </div>
      <div className="relative flex items-center">
        {canScrollRight && (
          <button
            className="w-[24px] h-[24px] absolute right-10 -translate-y-1/2 z-11 bg-white rounded-full shadow-2xl cursor-pointer"
            // className="absolute right-15 top-1/2 w-6 h-6 -translate-y-1/2 z-11 bg-white rounded-full shadow-2xl cursor-pointer"
            onClick={scrollRight}
          >
            {">"}
          </button>
        )}
      </div>
    </div>
  );
};

export default StoriesRow;

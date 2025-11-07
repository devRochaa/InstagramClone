import React from "react";
import {
  car2,
  catPfp,
  HomeFollowSuggestionCard,
  HomeProfileCard,
  mug,
  pfp,
} from "..";

const HomeSuggestions = () => {
  return (
    <div className="border-l border-border-dark h-full w-95">
      <div className="bg-black h-137 pl-5 pt-9 pr-14">
        <HomeProfileCard
          username="rochadaniel.o"
          name="daniel rocha"
          pfp={pfp}
          action="Mudar"
        />
        <div className="pt-5 flex flex-col">
          <div className="flex flex-row">
            <p className="text-text-lightgray font-medium text-sm">
              Sugestões para você
            </p>
            <p className="text-white text-[12px] font-medium ml-auto hover:cursor-pointer">
              Ver Tudo
            </p>
          </div>
          <div className="pt-3 flex flex-col gap-2">
            <HomeFollowSuggestionCard
              username="rochadaniel.o"
              followedBy="catdailymemes"
              pfp={catPfp}
              action="Seguir"
            />
            <HomeFollowSuggestionCard
              username="rochadaniel.o"
              followedBy="isisdone"
              pfp={car2}
              action="Seguir"
            />
            <HomeFollowSuggestionCard
              username="rochadaniel.o"
              followedBy="delpierro"
              pfp={mug}
              action="Seguir"
            />
            <HomeFollowSuggestionCard
              username="rochadaniel.o"
              followedBy="linkandlee"
              pfp={catPfp}
              action="Seguir"
            />
            <HomeFollowSuggestionCard
              username="rochadaniel.o"
              followedBy="gaara"
              pfp={car2}
              action="Seguir"
            />
          </div>

          <div className="text-zinc-500 pt-8">
            <ul className="flex flex-wrap gap-1.5 justify-start text-xs">
              <li>
                <a href="" className="hover:underline">
                  Sobre
                </a>
              </li>
              <li>.</li>
              <li>
                <a href="" className="hover:underline">
                  Imprensa
                </a>
              </li>
              <li>.</li>
              <li>
                <a href="" className="hover:underline">
                  API
                </a>
              </li>
              <li>.</li>
              <li>
                <a href="" className="hover:underline">
                  Carreiras
                </a>
              </li>
              <li>.</li>
              <li>
                <a href="" className="hover:underline">
                  Privacidade
                </a>
              </li>
              <li>.</li>
              <li>
                <a href="" className="hover:underline">
                  Termos
                </a>
              </li>
              <li>.</li>
              <li>
                <a href="" className="hover:underline">
                  Localizações
                </a>
              </li>
              <li>.</li>
              <li>
                <a href="" className="hover:underline">
                  Idioma
                </a>
              </li>
              <li>.</li>
              <li>
                <a href="" className="hover:underline">
                  Meta Verified
                </a>
              </li>
            </ul>
            <p className="pt-4 text-xs">© 2025 INSTAGRAM FROM META</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSuggestions;

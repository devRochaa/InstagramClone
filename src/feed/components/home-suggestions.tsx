import React from "react";
import pfp from "../../img/fotoperfil.jpg";
import SuggestionCard from "./suggestions-card";

const HomeSuggestions = () => {
  return (
    <div className="border-l border-zinc-800 bg-amber-300 h-full">
      <div className="bg-black h-120 pl-5 pt-9 pr-14">
        <SuggestionCard
          username="rochadaniel.o"
          name="daniel rocha"
          pfp={pfp}
          action="Mudar"
        />
        <div className="pt-5 flex flex-col">
          <div className="flex flex-row">
            <p className="text-zinc-400 font-medium text-sm">
              Sugestões para você
            </p>
            <p className="text-white text-[12px] font-medium ml-auto">
              Ver Tudo
            </p>
          </div>
          <div className="pt-3 flex flex-col gap-2">
            <SuggestionCard
              username="rochadaniel.o"
              name="Seguido(a) por luans ..."
              pfp={pfp}
              action="Seguir"
              textsize={12}
            />
            <SuggestionCard
              username="rochadaniel.o"
              name="Seguido(a) por luans ..."
              pfp={pfp}
              action="Seguir"
              textsize={12}
            />
            <SuggestionCard
              username="rochadaniel.o"
              name="Seguido(a) por luans ..."
              pfp={pfp}
              action="Seguir"
              textsize={12}
            />
            <SuggestionCard
              username="rochadaniel.o"
              name="Seguido(a) por luans ..."
              pfp={pfp}
              action="Seguir"
              textsize={12}
            />
            <SuggestionCard
              username="rochadaniel.o"
              name="Seguido(a) por luans ..."
              pfp={pfp}
              action="Seguir"
              textsize={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSuggestions;

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
        <div>
          <p className="text-zinc-400 font-medium text-ls">
            Sugestões para você
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSuggestions;

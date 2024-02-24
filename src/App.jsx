import React from "react";

import Logo from "./Logo.jsx";
import BestPokemon from "./BestPokemon.jsx";
import CaughtPokemon from "./CaughtPokemon.jsx";

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

  return (
    <div>
      <Logo appName="Rabia's Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon />
    </div>
  );
}

export default App;

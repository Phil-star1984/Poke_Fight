import { useState, useEffect } from "react";
import "./GameScreen.css";

function GameScreen() {
  const [pokemonA, setPokemonA] = useState(); // Player
  const [pokemonB, setPokemonB] = useState(); // CPU

  function setupGame() {
    // API get http://localhost:8000/pokemon/${id}/base
    // base:
    // {
    //   "HP": 60,
    //   "Attack": 62,
    //   "Defense": 63,
    //   "Sp. Attack": 80,
    //   "Sp. Defense": 80,
    //   "Speed": 60 //initiative: who starts
    // }
    // GameLoop:
    //  check: health for win/lose condition
    //  action: attack / defend / spAttack / spDefense
  }

  return (
    <>
      <h1>Wo kommen die Pokemons her? Props vom Select Screen?</h1>
      <div className="GameContainer">
        <div id="pokeA">PokeMon A</div>
        <div id="pokeB">PokeMon B</div>
      </div>
    </>
  );
}

export default GameScreen;
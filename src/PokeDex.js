import React from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {

  // function to remove extra information from api response
  const format = (apiData) => ({
      front: apiData.sprites.front_default,
      back: apiData.sprites.back_default,
      name: apiData.name,
      stats: apiData.stats.map(stat => ({
        value: stat.base_stat,
        name: stat.stat.name
      }))
    });
  
  const [pokemon, getData, removeAll] = useAxios("https://pokeapi.co/api/v2/pokemon/", format);

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={getData} removeAll={removeAll} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.front}
            back={cardData.back}
            name={cardData.name}
            stats={cardData.stats}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;

import React, { useState } from "react";

import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {

  // function to remove extra information from api response
  const format = (apiData) => ({image: apiData.cards[0].image})

  const [cards, getData, removeAll] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/", format);

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={getData}>Add a playing card!</button>
        <button onClick={removeAll}>Remove all cards</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;

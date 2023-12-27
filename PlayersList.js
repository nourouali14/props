import React from "react";
import Player from "./Player";
import playersData from "./Players";
import "./App.css"; 

const PlayersList = () => {
  return (
    <div className="PlayersList">
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;

import React from "react";
import Player from "./Player";
import players from "./players";

const PlayersList = () => (
  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", backgroundImage: "url('https://i.pinimg.com/474x/ff/17/05/ff1705e81c615d2e1dbc8d117912adc1.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
    {players.map((player, index) => (
      <Player key={index} {...player} />
    ))}
  </div>
);

export default PlayersList;

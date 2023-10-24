import React, { useState } from "react";

const UpdateName = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const clickHandler = () => {
    setGame({ ...game, player: { ...game.player, name: "Animesh" } });
  };

  return (
    <div>
      <div>
        Id = {game.id}, Name = {game.player.name}
      </div>
      <button onClick={clickHandler}>Update Name</button>
    </div>
  );
};

export default UpdateName;

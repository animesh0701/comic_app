import React from "react";
import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [clicked, setClicked] = useState(false);

  const handleLike = () => {
    onClick();
    setClicked(!clicked);
  };

  if (clicked) return <BsHeartFill fill="red" size={40} onClick={handleLike} />;
  else return <BsHeart size={40} onClick={handleLike} />;
};

export default Like;

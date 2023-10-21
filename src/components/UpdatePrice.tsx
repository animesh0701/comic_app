import React from "react";
import { useState } from "react";

const UpdatePrice = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: drink.price + 1 });
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>UpdatePrice</button>
    </div>
  );
};

export default UpdatePrice;

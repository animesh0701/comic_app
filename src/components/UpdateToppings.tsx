import React, { useState } from "react";

const UpdateToppings = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    topping: ["Mushroom"],
  });

  const clickHandler = () => {
    setPizza({ ...pizza, topping: [...pizza.topping, "Cheese"] });
  };

  return (
    <div>
      <div>
        Pizza : {pizza.name}, Toppings: {pizza.topping}
      </div>
      <button onClick={clickHandler}>UpdateToppings</button>
    </div>
  );
};

export default UpdateToppings;

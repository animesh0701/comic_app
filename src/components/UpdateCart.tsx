import React, { useState } from "react";

const UpdateCart = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product1", quantity: 1 },
      { id: 2, title: "Product2", quantity: 1 },
    ],
  });

  const clickHandler = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? (item = { ...item, quantity: 2 }) : item
      ),
    });
  };

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {cart.items.map((item, key) => (
          <li key={key}>
            <h4>{item.title}</h4>
            <div>
              Id : {item.title}, Quantity: {item.quantity}
            </div>
          </li>
        ))}
      </ul>
      <button onClick={clickHandler}>Update Cart</button>
    </div>
  );
};

export default UpdateCart;

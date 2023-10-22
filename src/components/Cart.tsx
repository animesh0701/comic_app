import React from "react";
interface Props {
  items: string[];
  clickHandler: () => void;
}
const Cart = ({ items, clickHandler }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {items.length === 0
          ? "No items in cart"
          : items.map((item) => <li key={item}>item : {item}</li>)}
        <button onClick={clickHandler}>Remove a item</button>
      </ul>
    </>
  );
};

export default Cart;

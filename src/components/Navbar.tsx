import React from "react";

interface Props {
  items: string[];
}

const Navbar = ({ items }: Props) => {
  return <div>items in your cart : {items.length} items</div>;
};

export default Navbar;

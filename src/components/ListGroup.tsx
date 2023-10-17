import { useState } from "react";
import Button from "./Button";

// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((comic, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={comic}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(comic);
            }}
          >
            {comic}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

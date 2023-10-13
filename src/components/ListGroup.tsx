import { useState } from "react";

function ListGroup() {
  const comics = ["Nirvana", "Boundary", "JJK", "CSM", "OnePiece"];

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {comics.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {comics.map((comic, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={comic}
            onClick={() => {
              setSelectedIndex(index);
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

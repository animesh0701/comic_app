import { MouseEvent } from "react";

function ListGroup() {
  const comics = ["Nirvana", "Boundary", "JJK", "CSM", "OnePiece"];

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {comics.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {comics.map((comic, index) => (
          <li className="list-group-item" key={comic} onClick={handleClick}>
            {comic}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

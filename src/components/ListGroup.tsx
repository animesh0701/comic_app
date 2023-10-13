function ListGroup() {
  let comics = ["Nirvana", "Boundary", "JJK", "CSM", "OnePiece"];
  comics = [];

  return (
    <>
      <h1>List</h1>
      {comics.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {comics.map((comic) => (
          <li key={comic}>{comic}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

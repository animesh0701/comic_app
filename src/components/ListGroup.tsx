function ListGroup() {
  const comics = ["Nirvana", "Boundary", "JJK", "CSM", "OnePiece"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {comics.map((comic) => (
          <li key={comic}>{comic}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

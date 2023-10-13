import ListGroup from "./components/ListGroup";
const comics = ["Nirvana", "Boundary", "JJK", "CSM", "OnePiece"];

function App() {
  return (
    <div>
      <ListGroup items={comics} heading="Comics" />
    </div>
  );
}

export default App;

import ListGroup from "./components/ListGroup";
const comics = ["Nirvana", "Boundary", "JJK", "CSM", "OnePiece"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <div>
      <ListGroup
        items={comics}
        heading="Comics"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;

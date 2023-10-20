import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import Button1 from "./components/Button1";
import styles from "./Button1.module.css";
const comics = ["Nirvana", "Boundary", "JJK", "CSM", "OnePiece"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/*<ListGroup
        items={comics}
        heading="Comics"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Buy Now</Button>
      <BsFillCartCheckFill color="red" size={40} />
      */}
      <Button1 onClick={() => console.log("Clicked")}>Click Here</Button1>
    </div>
  );
}

export default App;

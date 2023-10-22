import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import { BsFillCartCheckFill, BsHeart, BsHeartFill } from "react-icons/bs";
import Button1 from "./components/Button1";
import styles from "./Button1.module.css";
import Like from "./components/Like";
import Message from "./components/Message";
import UpdatePrice from "./components/UpdatePrice";
import UpdateZip from "./components/UpdateZip";
import UpdateTag from "./components/UpdateTag";
import UpdateBug from "./components/UpdateBug";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
const comics = ["Nirvana", "Boundary", "JJK", "CSM", "OnePiece"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [cartItem, setCartItem] = useState(["product1", "product2"]);

  const HandleClick = () => {
    setCartItem(
      cartItem.filter((item) => item !== cartItem[cartItem.length - 1])
    );
  };
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

      <Button1 onClick={() => console.log("Clicked")}>Click Here</Button1>
      <Like onClick={() => console.log("Clicked")} />
      <Message />
      <UpdatePrice />
      <UpdateZip />
      <UpdateTag />
      <UpdateBug />
      */}
      <Navbar items={cartItem} />
      <Cart items={cartItem} clickHandler={HandleClick} />
    </div>
  );
}

export default App;

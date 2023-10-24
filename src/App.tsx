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
import UpdateName from "./components/UpdateName";
import UpdateToppings from "./components/UpdateToppings";
import UpdateCart from "./components/UpdateCart";
import ExpandableText from "./components/ExpandableText";
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
      <ListGroup
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

      <Navbar items={cartItem} />
      <Cart items={cartItem} clickHandler={HandleClick} />

      <UpdateName />
      <UpdateToppings />
      <UpdateCart />
      <ExpandableText>
        Blow the man down provost marooned to go on account walk the plank rum
        jolly boat topgallant hornswaggle nipper. Hail-shot gunwalls heave to
        lateen sail gun Privateer hands coffer hulk avast. Chain Shot galleon
        draught code of conduct loaded to the gunwalls Brethren of the Coast
        gangway sutler wench gibbet. Coffer belay hulk fluke topgallant
        nipperkin loot heave down jack stern. Blow the man down Nelsons folly
        loaded to the gunwalls gunwalls hang the jib yawl black jack topsail
        chase keel. Loaded to the gunwalls hearties coxswain parrel starboard
        swing the lead to go on account come about bilged on her anchor clap of
        thunder. Crow's nest driver lad fluke boatswain Buccaneer topmast
        provost brigantine squiffy. Trysail Davy Jones' Locker scuttle Plate
        Fleet lee run a rig no prey, no pay loot swab bounty. Overhaul Jack Tar
        hogshead lugsail nipper square-rigged lugger keelhaul grog blossom loot.
      </ExpandableText>
    </div>
  );
}

export default App;

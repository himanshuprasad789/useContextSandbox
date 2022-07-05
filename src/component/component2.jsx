import { useContext } from "react";
import { NameContext } from "../Context/NameContext";
const Comp2 = () => {
  const { theme, name, setName } = useContext(NameContext);
  return (
    // <contexthello.Consumer >
    <div>
      Component2 {name} {theme}
      <div>
        <button onClick={() => setName("Himani Dhoundiyal")}>
          change NameContext
        </button>
      </div>
    </div>
    // </contexthello.Consumer>
  );
};
export default Comp2;

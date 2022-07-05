import { useContext } from "react";
import { NameContext } from "../Context/NameContext";

const Comp1 = () => {
  const { name, theme, setTheme } = useContext(NameContext);
  return (
    <div>
      Component1 {name} {theme}
      <div>
        <button onClick={() => setTheme("dark")}>change theme</button>
      </div>
    </div>
  );
};
export default Comp1;

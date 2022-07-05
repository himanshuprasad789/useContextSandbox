import { useState } from "react";
import { NameContext } from "./NameContext";

function ContextState(props) {
  const [name, setName] = useState("Himanshu Prasad");
  const [theme, setTheme] = useState("light");

  return (
    <NameContext.Provider value={{ name, setName, theme, setTheme }}>
      {props.children}
    </NameContext.Provider>
  );
}
export default ContextState;

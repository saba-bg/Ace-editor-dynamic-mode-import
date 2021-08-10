import React, { lazy, useState } from "react";
import Ace from "./editor/Ace";

function App() {
  function onChange(newValue) {
    console.log("change", newValue);
  }
  const [lan, setLan] = useState("java");
  return (
    <div>
      <Ace lan={lan} />
    </div>
    // document.getElementById("example")
  );
}

export default App;

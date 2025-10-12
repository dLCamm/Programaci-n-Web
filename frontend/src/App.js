import React, { useState } from "react";
import Hide from "./components/hide";
import Show from "./components/show";
import "./App.css"

function App() {
  const [tab, setTab] = useState("hide");

  return (
    <div className="container">
      <h1 className="letra">Mensaje Secreto 🙊 </h1>
      <div className="b">
        <button className="buttonss" onClick={() => setTab("hide")}>Ocultar</button>
        <button className="buttonss" onClick={() => setTab("show")}>Mostrar</button>
      </div>

      {tab === "hide" ? <Hide /> : <Show />}
    </div>
  );
}

export default App;

import { useState } from "react";
import './App.css'
function App() {

  const [contador, setcontador] = useState(0);
  return (
    <div className="App">
      <h1>LISTA DE POST</h1>
      <h2>{contador}</h2>
      <button className=".btn-incremento">+</button>
      <button className=".btn-incremento">-</button>
    </div>
  );
}

export default App;

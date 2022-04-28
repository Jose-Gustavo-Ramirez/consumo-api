import { useState } from "react";
import './App.css'

function App() {

  const [contador, setcontador] = useState(0);

  //funcion de flecha
const incremento = (previo) =>{return previo + 1};
const disminuir = (previo) =>{return previo - 1};


  return (
    <div className="App">
      <h1>LISTA DE POST</h1>
      <h2>{contador}</h2>
      <button onClick={() => {setcontador(incremento)}} className="btn-incremento">+</button>
      <button onClick={() => {setcontador(disminuir)}}className="btn-incremento">-</button>
    </div>
  );
}

export default App;

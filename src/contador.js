import { useState } from "react";
import './Contador.css'

function Contador() {
const [contador, setContador] = useState(0);

//funcion de flecha
const incremento = (previo) =>{return previo + 1};
const disminuir = (previo) =>{return previo - 1};


return (
  <div className="App">
    <h1>CONTADOR</h1>
    <h2>{Contador}</h2>
    <button onClick={() => {setContador(incremento)}} className="btn-incremento">+</button>
    <button onClick={() => {setContador(disminuir)}}className="btn-incremento">-</button>
  </div>
);
}
export default Contador
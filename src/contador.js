import React from 'react'
import './contador.css'

function contador() {
const [contador, setcontador] = useState(0);

//funcion de flecha
const incremento = (previo) =>{return previo + 1};
const disminuir = (previo) =>{return previo - 1};


return (
  <div className="App">
    <h1>CONTADOR</h1>
    <h2>{contador}</h2>
    <button onClick={() => {setcontador(incremento)}} className="btn-incremento">+</button>
    <button onClick={() => {setcontador(disminuir)}}className="btn-incremento">-</button>
  </div>
);
}
export default contador;
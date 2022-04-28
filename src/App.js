import { useState } from "react";

function App() {

  const [contador, setcontador] = useState(0);
  return (
    <div className="App">
      <h1>LISTA DE POST</h1>
      <h2>{contador}</h2>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import freeCodeCamp from "./imagenes/freecodecamp.png";
import { Boton } from "./componentes/Boton.jsx";
import Contador from "./componentes/Contador.jsx";

function App() {
  
  const [numClicks, setNumClicks] = useState(0);
  const manejarClick = () => {
    setNumClicks(numClicks + 1)
  };
  const reiniciarContador = () => {
    setNumClicks(0);
    console.log("reiniciar");
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCamp}
          alt="logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks} />
        <Boton
          texto="click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto="reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}
export default App;

import React from "react";
import "../hojas-de-es-tilo/Boton.css";

export const Boton = ({ texto, esBotonDeClick, manejarClick }) => {
  return (
    <button
      className={esBotonDeClick ? "boton-click" : "boton-reiniciar"}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
};

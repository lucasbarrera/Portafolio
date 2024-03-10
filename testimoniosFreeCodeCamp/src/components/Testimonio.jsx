import React from "react";
import '../style-sheet/Testimonio.css'

const Testimonio = (props) => {
  return (
    <div>
      <div className="contenedor-testimonio">
        <img
          className="imagen-testimonio"
          src={`src/images/${props.imagen}.jpg`}
          alt="iamgen emma"
        />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
          <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
          <p className="texto-testimonio">"{props.testimonio}"</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonio;

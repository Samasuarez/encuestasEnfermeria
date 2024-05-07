import React from "react";
import "./styles.css"; 

const ModalComponent = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>¡Formulario enviado con éxito!</h2>
        <p>Gracias por completar el cuestionario.</p>
      </div>
    </div>
  );
};

export default ModalComponent;


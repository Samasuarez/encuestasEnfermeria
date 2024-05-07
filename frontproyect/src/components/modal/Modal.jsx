import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

const ModalComponent = ({ handleClose }) => {
  const modalOpen = useSelector((state) => state.modal.isOpen);

  return (
    modalOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>¡Formulario enviado con éxito!</h2>
          <p>Gracias por completar el cuestionario.</p>
          <button onClick={handleClose}>Cerrar</button>
        </div>
      </div>
    )
  );
};

export default ModalComponent;

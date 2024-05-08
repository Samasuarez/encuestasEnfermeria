import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRespuesta, selectRespuestas } from "../../redux/questionnaireSlice";
import { openModal, closeModal } from "../../redux/modalSlice";
import ModalComponent from "../modal/Modal";
import preguntas from "../../utils/preguntas."; 
import "./styles.css";

const Questionnaire = () => {
  const dispatch = useDispatch();
  const respuestas = useSelector(selectRespuestas);
  const [enviado, setEnviado] = useState(false);
  const [cuestionarioId, setCuestionarioId] = useState(null);

  const handleChange = (preguntaId, respuesta) => {
    dispatch(setRespuesta({ preguntaId, respuesta }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!cuestionarioId) {
        const nuevoId = generateUniqueId();
        setCuestionarioId(nuevoId);
      }

      const response = await enviarCuestionario({ cuestionarioId, respuestas });
      if (response) {
        console.log("Cuestionario enviado exitosamente");
        dispatch(openModal());
        setTimeout(() => {
          dispatch(closeModal());
        }, 2000);
        setTimeout(() => {
          window.location.reload();
        }, 10000);
        setEnviado(true);
      } else {
        console.error("Error al enviar el cuestionario");
      }
    } catch (error) {
      console.error("Error al enviar el cuestionario:", error);
    }
  };

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const enviarCuestionario = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/api/cuestionario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return response.json();
    } catch (error) {
      console.error("Error al enviar el cuestionario:", error);
      throw error;
    }
  };

  return (
    <div className="container">
      <h1>Cuestionario de Salud en Enfermería</h1>
      <form onSubmit={handleSubmit}>
        {preguntas.map((pregunta) => (
          <div className="question" key={pregunta.id}>
            <h3>{pregunta.pregunta}</h3>
            {pregunta.respuestas.map((respuesta, index) => (
              <div className="option" key={index}>
                <input
                  type="radio"
                  id={`pregunta${pregunta.id}_opcion${index + 1}`}
                  name={`pregunta${pregunta.id}`}
                  value={respuesta}
                  checked={respuestas[`pregunta${pregunta.id}`] === respuesta}
                  onChange={() =>
                    handleChange(`pregunta${pregunta.id}`, respuesta)
                  }
                />
                <label htmlFor={`pregunta${pregunta.id}_opcion${index + 1}`}>
                  {respuesta}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit" className="submit-btn">
          Enviar cuestionario
        </button>
      </form>
      <ModalComponent />
    </div>
  );
};

export default Questionnaire;

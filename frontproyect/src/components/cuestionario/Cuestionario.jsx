import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRespuesta, selectRespuestas } from "../../redux/questionnaireSlice";
import { openModal, closeModal } from "../../redux/modalSlice";
import ModalComponent from "../modal/Modal";
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
        <div className="question">
          <h3>
            1. ¿Cuál es la función principal de una enfermera en un hospital?
          </h3>
          <div className="option">
            <input
              type="radio"
              id="pregunta1_opcion1"
              name="pregunta1"
              value="Brindar atención médica directa a los pacientes"
              checked={
                respuestas["pregunta1"] ===
                "Brindar atención médica directa a los pacientes"
              }
              onChange={() =>
                handleChange(
                  "pregunta1",
                  "Brindar atención médica directa a los pacientes"
                )
              }
            />
            <label htmlFor="pregunta1_opcion1">
              Brindar atención médica directa a los pacientes
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta1_opcion2"
              name="pregunta1"
              value="Administrar el hospital y su personal"
              checked={
                respuestas["pregunta1"] ===
                "Administrar el hospital y su personal"
              }
              onChange={() =>
                handleChange(
                  "pregunta1",
                  "Administrar el hospital y su personal"
                )
              }
            />
            <label htmlFor="pregunta1_opcion2">
              Administrar el hospital y su personal
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta1_opcion3"
              name="pregunta1"
              value="Realizar cirugías y procedimientos médicos"
              checked={
                respuestas["pregunta1"] ===
                "Realizar cirugías y procedimientos médicos"
              }
              onChange={() =>
                handleChange(
                  "pregunta1",
                  "Realizar cirugías y procedimientos médicos"
                )
              }
            />
            <label htmlFor="pregunta1_opcion3">
              Realizar cirugías y procedimientos médicos
            </label>
          </div>
        </div>

        <div className="question">
          <h3>
            2. ¿Cuál de las siguientes opciones describe mejor la función de un
            enfermero de cuidados intensivos?
          </h3>
          <div className="option">
            <input
              type="radio"
              id="pregunta2_opcion1"
              name="pregunta2"
              value="Monitorear y cuidar a pacientes con condiciones médicas críticas"
              checked={
                respuestas["pregunta2"] ===
                "Monitorear y cuidar a pacientes con condiciones médicas críticas"
              }
              onChange={() =>
                handleChange(
                  "pregunta2",
                  "Monitorear y cuidar a pacientes con condiciones médicas críticas"
                )
              }
            />
            <label htmlFor="pregunta2_opcion1">
              Monitorear y cuidar a pacientes con condiciones médicas críticas
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta2_opcion2"
              name="pregunta2"
              value="Realizar exámenes médicos de rutina en pacientes ambulatorios"
              checked={
                respuestas["pregunta2"] ===
                "Realizar exámenes médicos de rutina en pacientes ambulatorios"
              }
              onChange={() =>
                handleChange(
                  "pregunta2",
                  "Realizar exámenes médicos de rutina en pacientes ambulatorios"
                )
              }
            />
            <label htmlFor="pregunta2_opcion2">
              Realizar exámenes médicos de rutina en pacientes ambulatorios
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta2_opcion3"
              name="pregunta2"
              value="Brindar terapia ocupacional a pacientes con discapacidades físicas"
              checked={
                respuestas["pregunta2"] ===
                "Brindar terapia ocupacional a pacientes con discapacidades físicas"
              }
              onChange={() =>
                handleChange(
                  "pregunta2",
                  "Brindar terapia ocupacional a pacientes con discapacidades físicas"
                )
              }
            />
            <label htmlFor="pregunta2_opcion3">
              Brindar terapia ocupacional a pacientes con discapacidades físicas
            </label>
          </div>
        </div>

        <div className="question">
          <h3>
            3. ¿Cuál de las siguientes opciones describe mejor el papel de una
            enfermera en la prevención de infecciones?
          </h3>
          <div className="option">
            <input
              type="radio"
              id="pregunta3_opcion1"
              name="pregunta3"
              value="Educar a los pacientes sobre medidas de higiene y prevención de infecciones"
              checked={
                respuestas["pregunta3"] ===
                "Educar a los pacientes sobre medidas de higiene y prevención de infecciones"
              }
              onChange={() =>
                handleChange(
                  "pregunta3",
                  "Educar a los pacientes sobre medidas de higiene y prevención de infecciones"
                )
              }
            />
            <label htmlFor="pregunta3_opcion1">
              Educar a los pacientes sobre medidas de higiene y prevención de
              infecciones
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta3_opcion2"
              name="pregunta3"
              value="Administrar vacunas a pacientes de todas las edades"
              checked={
                respuestas["pregunta3"] ===
                "Administrar vacunas a pacientes de todas las edades"
              }
              onChange={() =>
                handleChange(
                  "pregunta3",
                  "Administrar vacunas a pacientes de todas las edades"
                )
              }
            />
            <label htmlFor="pregunta3_opcion2">
              Administrar vacunas a pacientes de todas las edades
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta3_opcion3"
              name="pregunta3"
              value="Realizar cirugías y procedimientos médicos"
              checked={
                respuestas["pregunta3"] ===
                "Realizar cirugías y procedimientos médicos"
              }
              onChange={() =>
                handleChange(
                  "pregunta3",
                  "Realizar cirugías y procedimientos médicos"
                )
              }
            />
            <label htmlFor="pregunta3_opcion3">
              Realizar cirugías y procedimientos médicos
            </label>
          </div>
        </div>

        <div className="question">
          <h3>
            4. ¿Qué función tiene una enfermera en el cuidado de pacientes
            pediátricos?
          </h3>
          <div className="option">
            <input
              type="radio"
              id="pregunta4_opcion1"
              name="pregunta4"
              value="Administrar tratamientos médicos específicos según la edad del paciente"
              checked={
                respuestas["pregunta4"] ===
                "Administrar tratamientos médicos específicos según la edad del paciente"
              }
              onChange={() =>
                handleChange(
                  "pregunta4",
                  "Administrar tratamientos médicos específicos según la edad del paciente"
                )
              }
            />
            <label htmlFor="pregunta4_opcion1">
              Administrar tratamientos médicos específicos según la edad del
              paciente
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta4_opcion2"
              name="pregunta4"
              value="Brindar apoyo emocional tanto a los pacientes como a sus familias"
              checked={
                respuestas["pregunta4"] ===
                "Brindar apoyo emocional tanto a los pacientes como a sus familias"
              }
              onChange={() =>
                handleChange(
                  "pregunta4",
                  "Brindar apoyo emocional tanto a los pacientes como a sus familias"
                )
              }
            />
            <label htmlFor="pregunta4_opcion2">
              Brindar apoyo emocional tanto a los pacientes como a sus familias
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta4_opcion3"
              name="pregunta4"
              value="Realizar procedimientos quirúrgicos complejos en niños"
              checked={
                respuestas["pregunta4"] ===
                "Realizar procedimientos quirúrgicos complejos en niños"
              }
              onChange={() =>
                handleChange(
                  "pregunta4",
                  "Realizar procedimientos quirúrgicos complejos en niños"
                )
              }
            />
            <label htmlFor="pregunta4_opcion3">
              Realizar procedimientos quirúrgicos complejos en niños
            </label>
          </div>
        </div>

        <div className="question">
          <h3>
            5. ¿Cuál de las siguientes opciones describe mejor el papel de una
            enfermera en la unidad de cuidados intensivos neonatales?
          </h3>
          <div className="option">
            <input
              type="radio"
              id="pregunta5_opcion1"
              name="pregunta5"
              value="Monitorear y cuidar a recién nacidos prematuros o con problemas de salud"
              checked={
                respuestas["pregunta5"] ===
                "Monitorear y cuidar a recién nacidos prematuros o con problemas de salud"
              }
              onChange={() =>
                handleChange(
                  "pregunta5",
                  "Monitorear y cuidar a recién nacidos prematuros o con problemas de salud"
                )
              }
            />
            <label htmlFor="pregunta5_opcion1">
              Monitorear y cuidar a recién nacidos prematuros o con problemas de
              salud
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta5_opcion2"
              name="pregunta5"
              value="Administrar tratamientos médicos específicos según la edad del paciente"
              checked={
                respuestas["pregunta5"] ===
                "Administrar tratamientos médicos específicos según la edad del paciente"
              }
              onChange={() =>
                handleChange(
                  "pregunta5",
                  "Administrar tratamientos médicos específicos según la edad del paciente"
                )
              }
            />
            <label htmlFor="pregunta5_opcion2">
              Administrar tratamientos médicos específicos según la edad del
              paciente
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta5_opcion3"
              name="pregunta5"
              value="Brindar terapia ocupacional a pacientes con discapacidades físicas"
              checked={
                respuestas["pregunta5"] ===
                "Brindar terapia ocupacional a pacientes con discapacidades físicas"
              }
              onChange={() =>
                handleChange(
                  "pregunta5",
                  "Brindar terapia ocupacional a pacientes con discapacidades físicas"
                )
              }
            />
            <label htmlFor="pregunta5_opcion3">
              Brindar terapia ocupacional a pacientes con discapacidades físicas
            </label>
          </div>
        </div>

        <div className="question">
          <h3>
            6. ¿Cuál de las siguientes opciones describe mejor el papel de una
            enfermera en la unidad de cuidados intensivos para adultos?
          </h3>
          <div className="option">
            <input
              type="radio"
              id="pregunta6_opcion1"
              name="pregunta6"
              value="Monitorear y cuidar a pacientes adultos con condiciones médicas críticas"
              checked={
                respuestas["pregunta6"] ===
                "Monitorear y cuidar a pacientes adultos con condiciones médicas críticas"
              }
              onChange={() =>
                handleChange(
                  "pregunta6",
                  "Monitorear y cuidar a pacientes adultos con condiciones médicas críticas"
                )
              }
            />
            <label htmlFor="pregunta6_opcion1">
              Monitorear y cuidar a pacientes adultos con condiciones médicas
              críticas
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta6_opcion2"
              name="pregunta6"
              value="Administrar vacunas a pacientes de todas las edades"
              checked={
                respuestas["pregunta6"] ===
                "Administrar vacunas a pacientes de todas las edades"
              }
              onChange={() =>
                handleChange(
                  "pregunta6",
                  "Administrar vacunas a pacientes de todas las edades"
                )
              }
            />
            <label htmlFor="pregunta6_opcion2">
              Administrar vacunas a pacientes de todas las edades
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta6_opcion3"
              name="pregunta6"
              value="Brindar terapia ocupacional a pacientes con discapacidades físicas"
              checked={
                respuestas["pregunta6"] ===
                "Brindar terapia ocupacional a pacientes con discapacidades físicas"
              }
              onChange={() =>
                handleChange(
                  "pregunta6",
                  "Brindar terapia ocupacional a pacientes con discapacidades físicas"
                )
              }
            />
            <label htmlFor="pregunta6_opcion3">
              Brindar terapia ocupacional a pacientes con discapacidades físicas
            </label>
          </div>
        </div>

        <div className="question">
          <h3>
            7. ¿Cuál de las siguientes opciones describe mejor el papel de una
            enfermera en un centro de atención primaria?
          </h3>
          <div className="option">
            <input
              type="radio"
              id="pregunta7_opcion1"
              name="pregunta7"
              value="Realizar exámenes médicos de rutina en pacientes ambulatorios"
              checked={
                respuestas["pregunta7"] ===
                "Realizar exámenes médicos de rutina en pacientes ambulatorios"
              }
              onChange={() =>
                handleChange(
                  "pregunta7",
                  "Realizar exámenes médicos de rutina en pacientes ambulatorios"
                )
              }
            />
            <label htmlFor="pregunta7_opcion1">
              Realizar exámenes médicos de rutina en pacientes ambulatorios
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta7_opcion2"
              name="pregunta7"
              value="Administrar tratamientos médicos específicos según la edad del paciente"
              checked={
                respuestas["pregunta7"] ===
                "Administrar tratamientos médicos específicos según la edad del paciente"
              }
              onChange={() =>
                handleChange(
                  "pregunta7",
                  "Administrar tratamientos médicos específicos según la edad del paciente"
                )
              }
            />
            <label htmlFor="pregunta7_opcion2">
              Administrar tratamientos médicos específicos según la edad del
              paciente
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta7_opcion3"
              name="pregunta7"
              value="Brindar atención médica directa a los pacientes"
              checked={
                respuestas["pregunta7"] ===
                "Brindar atención médica directa a los pacientes"
              }
              onChange={() =>
                handleChange(
                  "pregunta7",
                  "Brindar atención médica directa a los pacientes"
                )
              }
            />
            <label htmlFor="pregunta7_opcion3">
              Brindar atención médica directa a los pacientes
            </label>
          </div>
        </div>

        <div className="question">
          <h3>
            8. ¿Qué habilidad es fundamental para una enfermera que trabaja en
            un servicio de emergencias?
          </h3>
          <div className="option">
            <input
              type="radio"
              id="pregunta8_opcion1"
              name="pregunta8"
              value="Realizar evaluaciones rápidas y tomar decisiones bajo presión"
              checked={
                respuestas["pregunta8"] ===
                "Realizar evaluaciones rápidas y tomar decisiones bajo presión"
              }
              onChange={() =>
                handleChange(
                  "pregunta8",
                  "Realizar evaluaciones rápidas y tomar decisiones bajo presión"
                )
              }
            />
            <label htmlFor="pregunta8_opcion1">
              Realizar evaluaciones rápidas y tomar decisiones bajo presión
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta8_opcion2"
              name="pregunta8"
              value="Administrar tratamientos médicos específicos según la edad del paciente"
              checked={
                respuestas["pregunta8"] ===
                "Administrar tratamientos médicos específicos según la edad del paciente"
              }
              onChange={() =>
                handleChange(
                  "pregunta8",
                  "Administrar tratamientos médicos específicos según la edad del paciente"
                )
              }
            />
            <label htmlFor="pregunta8_opcion2">
              Administrar tratamientos médicos específicos según la edad del
              paciente
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta8_opcion3"
              name="pregunta8"
              value="Brindar apoyo emocional tanto a los pacientes como a sus familias"
              checked={
                respuestas["pregunta8"] ===
                "Brindar apoyo emocional tanto a los pacientes como a sus familias"
              }
              onChange={() =>
                handleChange(
                  "pregunta8",
                  "Brindar apoyo emocional tanto a los pacientes como a sus familias"
                )
              }
            />
            <label htmlFor="pregunta8_opcion3">
              Brindar apoyo emocional tanto a los pacientes como a sus familias
            </label>
          </div>
        </div>

        <div className="question">
          <h3>
            9. ¿Cuál de las siguientes opciones describe mejor la función de una
            enfermera en un centro de rehabilitación?
          </h3>
          <div className="option">
            <input
              type="radio"
              id="pregunta9_opcion1"
              name="pregunta9"
              value="Brindar terapia física y emocional a pacientes en proceso de recuperación"
              checked={
                respuestas["pregunta9"] ===
                "Brindar terapia física y emocional a pacientes en proceso de recuperación"
              }
              onChange={() =>
                handleChange(
                  "pregunta9",
                  "Brindar terapia física y emocional a pacientes en proceso de recuperación"
                )
              }
            />
            <label htmlFor="pregunta9_opcion1">
              Brindar terapia física y emocional a pacientes en proceso de
              recuperación
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta9_opcion2"
              name="pregunta9"
              value="Administrar tratamientos médicos específicos según la edad del paciente"
              checked={
                respuestas["pregunta9"] ===
                "Administrar tratamientos médicos específicos según la edad del paciente"
              }
              onChange={() =>
                handleChange(
                  "pregunta9",
                  "Administrar tratamientos médicos específicos según la edad del paciente"
                )
              }
            />
            <label htmlFor="pregunta9_opcion2">
              Administrar tratamientos médicos específicos según la edad del
              paciente
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta9_opcion3"
              name="pregunta9"
              value="Realizar evaluaciones rápidas y tomar decisiones bajo presión"
              checked={
                respuestas["pregunta9"] ===
                "Realizar evaluaciones rápidas y tomar decisiones bajo presión"
              }
              onChange={() =>
                handleChange(
                  "pregunta9",
                  "Realizar evaluaciones rápidas y tomar decisiones bajo presión"
                )
              }
            />
            <label htmlFor="pregunta9_opcion3">
              Realizar evaluaciones rápidas y tomar decisiones bajo presión
            </label>
          </div>
        </div>

        <div className="question">
          <h3>
            10. ¿Cuál de las siguientes opciones describe mejor el papel de una
            enfermera en un centro de atención a largo plazo?
          </h3>
          <div className="option">
            <input
              type="radio"
              id="pregunta10_opcion1"
              name="pregunta10"
              value="Brindar cuidados a largo plazo a pacientes con enfermedades crónicas o discapacidades"
              checked={
                respuestas["pregunta10"] ===
                "Brindar cuidados a largo plazo a pacientes con enfermedades crónicas o discapacidades"
              }
              onChange={() =>
                handleChange(
                  "pregunta10",
                  "Brindar cuidados a largo plazo a pacientes con enfermedades crónicas o discapacidades"
                )
              }
            />
            <label htmlFor="pregunta10_opcion1">
              Brindar cuidados a largo plazo a pacientes con enfermedades
              crónicas o discapacidades
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta10_opcion2"
              name="pregunta10"
              value="Administrar vacunas a pacientes de todas las edades"
              checked={
                respuestas["pregunta10"] ===
                "Administrar vacunas a pacientes de todas las edades"
              }
              onChange={() =>
                handleChange(
                  "pregunta10",
                  "Administrar vacunas a pacientes de todas las edades"
                )
              }
            />
            <label htmlFor="pregunta10_opcion2">
              Administrar vacunas a pacientes de todas las edades
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="pregunta10_opcion3"
              name="pregunta10"
              value="Realizar exámenes médicos de rutina en pacientes ambulatorios"
              checked={
                respuestas["pregunta10"] ===
                "Realizar exámenes médicos de rutina en pacientes ambulatorios"
              }
              onChange={() =>
                handleChange(
                  "pregunta10",
                  "Realizar exámenes médicos de rutina en pacientes ambulatorios"
                )
              }
            />
            <label htmlFor="pregunta10_opcion3">
              Realizar exámenes médicos de rutina en pacientes ambulatorios
            </label>
          </div>
        </div>
        <button type="submit" className="submit-btn">
          Enviar cuestionario
        </button>
      </form>
      <ModalComponent />
    </div>
  );
};

export default Questionnaire;

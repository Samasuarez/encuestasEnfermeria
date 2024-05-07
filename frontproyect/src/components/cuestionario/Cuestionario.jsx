import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRespuesta, selectRespuestas } from "../../redux/questionnaireSlice";

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
        setEnviado(true);
        setTimeout(() => {
          window.location.reload(); 
        }, 2000);
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
    <div>
      <h1>Cuestionario de Salud en Enfermería</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>
            1. ¿Cuál es la función principal de una enfermera en un hospital?
          </h3>
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
              handleChange("pregunta1", "Administrar el hospital y su personal")
            }
          />
          <label htmlFor="pregunta1_opcion2">
            Administrar el hospital y su personal
          </label>
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

        <div>
          <h3>
            2. ¿Cuál de las siguientes opciones describe mejor la función de un
            enfermero de cuidados intensivos?
          </h3>
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

        <div>
          <h3>
            3. ¿Cuál de las siguientes opciones describe mejor el papel de una
            enfermera en la prevención de infecciones?
          </h3>
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

        <div>
          <h3>
            4. ¿Cuál es el propósito principal de la esterilización en el
            entorno hospitalario?
          </h3>
          <input
            type="radio"
            id="pregunta4_opcion1"
            name="pregunta4"
            value="Eliminar todos los microorganismos presentes en el equipo médico"
            checked={
              respuestas["pregunta4"] ===
              "Eliminar todos los microorganismos presentes en el equipo médico"
            }
            onChange={() =>
              handleChange(
                "pregunta4",
                "Eliminar todos los microorganismos presentes en el equipo médico"
              )
            }
          />
          <label htmlFor="pregunta4_opcion1">
            Eliminar todos los microorganismos presentes en el equipo médico
          </label>
          <input
            type="radio"
            id="pregunta4_opcion2"
            name="pregunta4"
            value="Desinfectar el equipo médico para eliminar gérmenes patógenos"
            checked={
              respuestas["pregunta4"] ===
              "Desinfectar el equipo médico para eliminar gérmenes patógenos"
            }
            onChange={() =>
              handleChange(
                "pregunta4",
                "Desinfectar el equipo médico para eliminar gérmenes patógenos"
              )
            }
          />
          <label htmlFor="pregunta4_opcion2">
            Desinfectar el equipo médico para eliminar gérmenes patógenos
          </label>
          <input
            type="radio"
            id="pregunta4_opcion3"
            name="pregunta4"
            value="Limpiar el equipo médico para mantener un entorno ordenado"
            checked={
              respuestas["pregunta4"] ===
              "Limpiar el equipo médico para mantener un entorno ordenado"
            }
            onChange={() =>
              handleChange(
                "pregunta4",
                "Limpiar el equipo médico para mantener un entorno ordenado"
              )
            }
          />
          <label htmlFor="pregunta4_opcion3">
            Limpiar el equipo médico para mantener un entorno ordenado
          </label>
        </div>

        <div>
          <h3>
            5. ¿Qué se entiende por el término "bioseguridad" en el contexto de
            la enfermería?
          </h3>
          <input
            type="radio"
            id="pregunta5_opcion1"
            name="pregunta5"
            value="Protección de la salud y seguridad del personal médico"
            checked={
              respuestas["pregunta5"] ===
              "Protección de la salud y seguridad del personal médico"
            }
            onChange={() =>
              handleChange(
                "pregunta5",
                "Protección de la salud y seguridad del personal médico"
              )
            }
          />
          <label htmlFor="pregunta5_opcion1">
            Protección de la salud y seguridad del personal médico
          </label>
          <input
            type="radio"
            id="pregunta5_opcion2"
            name="pregunta5"
            value="Prevención de riesgos biológicos en entornos médicos"
            checked={
              respuestas["pregunta5"] ===
              "Prevención de riesgos biológicos en entornos médicos"
            }
            onChange={() =>
              handleChange(
                "pregunta5",
                "Prevención de riesgos biológicos en entornos médicos"
              )
            }
          />
          <label htmlFor="pregunta5_opcion2">
            Prevención de riesgos biológicos en entornos médicos
          </label>
          <input
            type="radio"
            id="pregunta5_opcion3"
            name="pregunta5"
            value="Mantenimiento de la higiene y limpieza en instalaciones hospitalarias"
            checked={
              respuestas["pregunta5"] ===
              "Mantenimiento de la higiene y limpieza en instalaciones hospitalarias"
            }
            onChange={() =>
              handleChange(
                "pregunta5",
                "Mantenimiento de la higiene y limpieza en instalaciones hospitalarias"
              )
            }
          />
          <label htmlFor="pregunta5_opcion3">
            Mantenimiento de la higiene y limpieza en instalaciones
            hospitalarias
          </label>
        </div>

        <div>
          <h3>
            6. ¿Cuál es la principal responsabilidad de una enfermera durante la
            administración de medicamentos?
          </h3>
          <input
            type="radio"
            id="pregunta6_opcion1"
            name="pregunta6"
            value="Administrar la dosis correcta de medicamento al paciente"
            checked={
              respuestas["pregunta6"] ===
              "Administrar la dosis correcta de medicamento al paciente"
            }
            onChange={() =>
              handleChange(
                "pregunta6",
                "Administrar la dosis correcta de medicamento al paciente"
              )
            }
          />
          <label htmlFor="pregunta6_opcion1">
            Administrar la dosis correcta de medicamento al paciente
          </label>
          <input
            type="radio"
            id="pregunta6_opcion2"
            name="pregunta6"
            value="Determinar la eficacia del medicamento para el tratamiento"
            checked={
              respuestas["pregunta6"] ===
              "Determinar la eficacia del medicamento para el tratamiento"
            }
            onChange={() =>
              handleChange(
                "pregunta6",
                "Determinar la eficacia del medicamento para el tratamiento"
              )
            }
          />
          <label htmlFor="pregunta6_opcion2">
            Determinar la eficacia del medicamento para el tratamiento
          </label>
          <input
            type="radio"
            id="pregunta6_opcion3"
            name="pregunta6"
            value="Preparar informes sobre el historial de medicación del paciente"
            checked={
              respuestas["pregunta6"] ===
              "Preparar informes sobre el historial de medicación del paciente"
            }
            onChange={() =>
              handleChange(
                "pregunta6",
                "Preparar informes sobre el historial de medicación del paciente"
              )
            }
          />
          <label htmlFor="pregunta6_opcion3">
            Preparar informes sobre el historial de medicación del paciente
          </label>
        </div>

        <div>
          <h3>
            7. ¿Cuál es la función principal del lavado de manos en el entorno
            sanitario?
          </h3>
          <input
            type="radio"
            id="pregunta7_opcion1"
            name="pregunta7"
            value="Eliminar los gérmenes presentes en las manos del personal médico"
            checked={
              respuestas["pregunta7"] ===
              "Eliminar los gérmenes presentes en las manos del personal médico"
            }
            onChange={() =>
              handleChange(
                "pregunta7",
                "Eliminar los gérmenes presentes en las manos del personal médico"
              )
            }
          />
          <label htmlFor="pregunta7_opcion1">
            Eliminar los gérmenes presentes en las manos del personal médico
          </label>
          <input
            type="radio"
            id="pregunta7_opcion2"
            name="pregunta7"
            value="Mantener las manos del personal médico limpias y suaves"
            checked={
              respuestas["pregunta7"] ===
              "Mantener las manos del personal médico limpias y suaves"
            }
            onChange={() =>
              handleChange(
                "pregunta7",
                "Mantener las manos del personal médico limpias y suaves"
              )
            }
          />
          <label htmlFor="pregunta7_opcion2">
            Mantener las manos del personal médico limpias y suaves
          </label>
          <input
            type="radio"
            id="pregunta7_opcion3"
            name="pregunta7"
            value="Proteger al personal médico de posibles infecciones durante el trabajo"
            checked={
              respuestas["pregunta7"] ===
              "Proteger al personal médico de posibles infecciones durante el trabajo"
            }
            onChange={() =>
              handleChange(
                "pregunta7",
                "Proteger al personal médico de posibles infecciones durante el trabajo"
              )
            }
          />
          <label htmlFor="pregunta7_opcion3">
            Proteger al personal médico de posibles infecciones durante el
            trabajo
          </label>
        </div>

        <div>
          <h3>
            8. ¿Qué se entiende por "triage" en el contexto de los servicios de
            emergencia médica?
          </h3>
          <input
            type="radio"
            id="pregunta8_opcion1"
            name="pregunta8"
            value="Un sistema de clasificación para priorizar la atención a pacientes según la gravedad de sus lesiones o enfermedades"
            checked={
              respuestas["pregunta8"] ===
              "Un sistema de clasificación para priorizar la atención a pacientes según la gravedad de sus lesiones o enfermedades"
            }
            onChange={() =>
              handleChange(
                "pregunta8",
                "Un sistema de clasificación para priorizar la atención a pacientes según la gravedad de sus lesiones o enfermedades"
              )
            }
          />
          <label htmlFor="pregunta8_opcion1">
            Un sistema de clasificación para priorizar la atención a pacientes
            según la gravedad de sus lesiones o enfermedades
          </label>
          <input
            type="radio"
            id="pregunta8_opcion2"
            name="pregunta8"
            value="Un procedimiento para estabilizar a pacientes en estado crítico antes de trasladarlos al hospital"
            checked={
              respuestas["pregunta8"] ===
              "Un procedimiento para estabilizar a pacientes en estado crítico antes de trasladarlos al hospital"
            }
            onChange={() =>
              handleChange(
                "pregunta8",
                "Un procedimiento para estabilizar a pacientes en estado crítico antes de trasladarlos al hospital"
              )
            }
          />
          <label htmlFor="pregunta8_opcion2">
            Un procedimiento para estabilizar a pacientes en estado crítico
            antes de trasladarlos al hospital
          </label>
          <input
            type="radio"
            id="pregunta8_opcion3"
            name="pregunta8"
            value="Un protocolo de evacuación de emergencia en situaciones de desastre natural"
            checked={
              respuestas["pregunta8"] ===
              "Un protocolo de evacuación de emergencia en situaciones de desastre natural"
            }
            onChange={() =>
              handleChange(
                "pregunta8",
                "Un protocolo de evacuación de emergencia en situaciones de desastre natural"
              )
            }
          />
          <label htmlFor="pregunta8_opcion3">
            Un protocolo de evacuación de emergencia en situaciones de desastre
            natural
          </label>
        </div>

        <div>
          <h3>
            9. ¿Cuál es la importancia de la comunicación efectiva en el entorno
            de la enfermería?
          </h3>
          <input
            type="radio"
            id="pregunta9_opcion1"
            name="pregunta9"
            value="Facilitar la coordinación entre diferentes profesionales de la salud"
            checked={
              respuestas["pregunta9"] ===
              "Facilitar la coordinación entre diferentes profesionales de la salud"
            }
            onChange={() =>
              handleChange(
                "pregunta9",
                "Facilitar la coordinación entre diferentes profesionales de la salud"
              )
            }
          />
          <label htmlFor="pregunta9_opcion1">
            Facilitar la coordinación entre diferentes profesionales de la salud
          </label>
          <input
            type="radio"
            id="pregunta9_opcion2"
            name="pregunta9"
            value="Brindar información clara y precisa a los pacientes y sus familias"
            checked={
              respuestas["pregunta9"] ===
              "Brindar información clara y precisa a los pacientes y sus familias"
            }
            onChange={() =>
              handleChange(
                "pregunta9",
                "Brindar información clara y precisa a los pacientes y sus familias"
              )
            }
          />
          <label htmlFor="pregunta9_opcion2">
            Brindar información clara y precisa a los pacientes y sus familias
          </label>
          <input
            type="radio"
            id="pregunta9_opcion3"
            name="pregunta9"
            value="Mejorar la eficiencia en la prestación de servicios de salud"
            checked={
              respuestas["pregunta9"] ===
              "Mejorar la eficiencia en la prestación de servicios de salud"
            }
            onChange={() =>
              handleChange(
                "pregunta9",
                "Mejorar la eficiencia en la prestación de servicios de salud"
              )
            }
          />
          <label htmlFor="pregunta9_opcion3">
            Mejorar la eficiencia en la prestación de servicios de salud
          </label>
        </div>

        <div>
          <h3>
            10. ¿Qué medidas se pueden tomar para prevenir la propagación de
            infecciones en el entorno hospitalario?
          </h3>
          <input
            type="radio"
            id="pregunta10_opcion1"
            name="pregunta10"
            value="Lavado frecuente de manos y uso de equipo de protección personal"
            checked={
              respuestas["pregunta10"] ===
              "Lavado frecuente de manos y uso de equipo de protección personal"
            }
            onChange={() =>
              handleChange(
                "pregunta10",
                "Lavado frecuente de manos y uso de equipo de protección personal"
              )
            }
          />
          <label htmlFor="pregunta10_opcion1">
            Lavado frecuente de manos y uso de equipo de protección personal
          </label>
          <input
            type="radio"
            id="pregunta10_opcion2"
            name="pregunta10"
            value="Aumento de la temperatura en las instalaciones hospitalarias"
            checked={
              respuestas["pregunta10"] ===
              "Aumento de la temperatura en las instalaciones hospitalarias"
            }
            onChange={() =>
              handleChange(
                "pregunta10",
                "Aumento de la temperatura en las instalaciones hospitalarias"
              )
            }
          />
          <label htmlFor="pregunta10_opcion2">
            Aumento de la temperatura en las instalaciones hospitalarias
          </label>
          <input
            type="radio"
            id="pregunta10_opcion3"
            name="pregunta10"
            value="Aireación adecuada de las áreas de atención médica"
            checked={
              respuestas["pregunta10"] ===
              "Aireación adecuada de las áreas de atención médica"
            }
            onChange={() =>
              handleChange(
                "pregunta10",
                "Aireación adecuada de las áreas de atención médica"
              )
            }
          />
          <label htmlFor="pregunta10_opcion3">
            Aireación adecuada de las áreas de atención médica
          </label>
        </div>

        <button type="submit">Enviar cuestionario</button>
      </form>
    </div>
  );
};

export default Questionnaire;

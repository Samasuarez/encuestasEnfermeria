import Cuestionario from "../models/respuesta.model.js";

export const enviarRespuestas = async (req, res) => {
  try {
    console.log("Datos recibidos del cliente:", req.body);
    const { cuestionarioId, respuestas } = req.body;

    if (!respuestas || Object.keys(respuestas).length !== 10) {
      return res.status(400).json({
        message: "Se requieren 10 respuestas para enviar el cuestionario.",
      });
    }

    const respuestasArray = Object.values(respuestas);

    const nuevoCuestionario = await Cuestionario.create({
      cuestionarioId,
      respuestas: respuestasArray,
    });

    console.log(
      "Cuestionario guardado en la base de datos:",
      nuevoCuestionario
    );

    return res.status(201).json(nuevoCuestionario);
  } catch (error) {
    console.error("Error al crear el cuestionario:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

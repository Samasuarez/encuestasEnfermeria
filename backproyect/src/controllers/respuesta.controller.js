import Cuestionario from "../models/respuesta.model.js";

export const enviarRespuestas = async (req, res) => {
  try {
    const { respuestas } = req.body;

    if (!respuestas || respuestas.length !== 10) {
      return res
        .status(400)
        .json({
          message: "Se requieren 10 respuestas para enviar el cuestionario.",
        });
    }

    const nuevoCuestionario = await Cuestionario.create({ respuestas });

    return res.status(201).json(nuevoCuestionario);
  } catch (error) {
    console.error("Error al crear el cuestionario:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

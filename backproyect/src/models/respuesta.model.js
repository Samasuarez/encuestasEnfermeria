import mongoose from "mongoose";

const cuestionarioSchema = new mongoose.Schema({
  cuestionarioId: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  respuestas: [{ type: String, required: true }]
});

const Cuestionario = mongoose.model('Cuestionario', cuestionarioSchema);

export default Cuestionario;

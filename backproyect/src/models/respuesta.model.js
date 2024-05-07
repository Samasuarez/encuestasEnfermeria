import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const cuestionarioSchema = new mongoose.Schema({
  respuestas: [{ type: String, required: true }],
}); 

cuestionarioSchema.plugin(mongoosePaginate);

const Cuestionario = mongoose.model("Cuestionario", cuestionarioSchema);

export default Cuestionario;

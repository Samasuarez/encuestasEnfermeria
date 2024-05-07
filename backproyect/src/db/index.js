
import mongoose from "mongoose";


const mongoConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://joublinsuarez:suarezjoublin@cluster0.rqitsxz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Conexión a la base de datos establecida correctamente.");
  } catch (error) {
    console.log("Error al conectar a la base de datos:", error);
  }
};


export default mongoConnect;

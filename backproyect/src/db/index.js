import mongoose from "mongoose";

export const mongoConect = async () => {
  try {
    await mongoose.connect(
        "mongodb+srv://joublinsuarez:suarezjoublin@cluster0.rqitsxz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("db connected");
  } catch (error) {
    console.log("error connecting to the database");
  }
};
import express from "express";
import cors from "cors";
import router from "./routes/main.routes.js";
// import { engine } from "express-handlebars";
import { __dirname } from "./path.js";
import  mongoConect  from "./db/index.js";
import path from "path";

const corsOptions = {
  origin: "*",
};
const app = express();
const PORT = 4000;

app.use(cors(corsOptions));

mongoConect();

app.set("views", path.resolve(__dirname, "./views/"));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});

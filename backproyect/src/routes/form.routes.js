import { Router } from "express";
import {enviarRespuestas} from "../controllers/respuesta.controller.js";

const routerRespuesta = Router();

routerRespuesta.post("/", enviarRespuestas);

export default routerRespuesta;

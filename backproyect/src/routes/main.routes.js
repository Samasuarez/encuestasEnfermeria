import { Router } from "express";
import routerRespuesta from "./form.routes.js";

const router = Router();

router.use("/api/cuestionario", routerRespuesta);

export default router
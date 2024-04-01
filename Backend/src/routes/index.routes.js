import { Router } from "express";
import { exercisesRoutes } from "./routes.js";

export const routes = Router();

routes.use(exercisesRoutes);

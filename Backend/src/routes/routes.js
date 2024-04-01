import { Router } from "express";
import { 
    getAllExercises, 
    getLowerExerciseId,
    getSuperiorsExerciseId,
    getAllSuperiorExercises,
    getAllLowerExercises
} from "../controllers/exercise.controllers.js";

export const exercisesRoutes = Router();

exercisesRoutes.get("/all-superiors-exercises", getAllSuperiorExercises);
exercisesRoutes.get("/all-lower-exercises", getAllLowerExercises);
exercisesRoutes.get("/all-exercises", getAllExercises);
exercisesRoutes.get("/lower-exercise-Id/:id", getLowerExerciseId);
exercisesRoutes.get("/superiors-exercise-Id/:id", getSuperiorsExerciseId);
import { superiorsExercises } from "../database/superiors.exercises.js";
import { lowerExercises } from "../database/lower.exercises.js";

export const getAllSuperiorExercises = async(req, res)=>{
    return res.json({superiorsExercises})
};

export const getAllLowerExercises = async(req, res)=>{
    return res.json({lowerExercises})
};

export const getAllExercises = async (req, res)=>{
    return res.json({superiorsExercises, lowerExercises})
};

export const getLowerExerciseId = async (req, res)=>{
    const id = lowerExercises.find(p => p.id === parseInt(req.params.id));
    if (!id) return res.status(404).send('exercise not found!');
    return res.json(id)
};

export const getSuperiorsExerciseId = async (req, res)=>{
    const id = superiorsExercises.find(p => p.id === parseInt(req.params.id));
    if (!id) return res.status(404).send('exercise not found!');
    return res.json(id)
};
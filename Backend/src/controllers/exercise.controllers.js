import { superiorsExercise } from "../database/superiors.exercises.js";
import { lowerExercise } from "../database/lower.exercises.js";


export const getAllSuperiorExercises = async(req, res)=>{
    return res.json({superiorsExercise})
};

export const getAllLowerExercises = async(req, res)=>{
    return res.json({lowerExercise})
};

export const getAllExercises = async (req, res)=>{
    return res.json({superiorsExercise, lowerExercise})
};

export const getLowerExerciseId = async (req, res)=>{
    const id = lowerExercise.exercises.find(p => p.id === parseInt(req.params.id));
    if (!id) return res.status(404).send('Exercicio não encontrado');
    return res.json(id)
};

export const getSuperiorsExerciseId = async (req, res)=>{
    const id = superiorsExercise.exercises.find(p => p.id === parseInt(req.params.id));
    if (!id) return res.status(404).send('Exercicio não encontrado');
    return res.json(id)
};
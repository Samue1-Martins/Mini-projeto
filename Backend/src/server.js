import express from "express"
import cors from "cors"
// import { superiorsExercise } from "./database/superiors.exercises.js";
import { routes } from "./routes/index.routes.js";

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(routes);

const port = process.env.PORT || 7000;

if(!port){
    throw new Error('Port not defined')
};

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`)
});
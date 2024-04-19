import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Main.css';

function Main() {

    const [ exercise, setExercise ] = useState ([])

    async function teste(){
        const { data } = await axios.get('https://mini-projetom5-w86g.onrender.com/all-lower-exercises')
        console.log(data)
        setExercise(data)
    }


    return (
        <main>
            <div className='main'>
                <div>
                    <h1>{}</h1>
                    <h1>{}</h1>
                    <button title='Todos exercicios' onClick={teste}>Todos exercicios</button>
                    <div ></div>
                </div>
                <div>
                   {exercise.map(exercise => 
                <div  key={exercise.id}>
                    <h1>{exercise.Nome}</h1>
                    <h2>{exercise.Repetições}</h2>


                </div>
                  
                
                )}
                </div>
            </div>
        </main>
    )
}

export default Main



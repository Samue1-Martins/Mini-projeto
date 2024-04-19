import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Main.css';

function Main() {

   
    const [ exercise, setExercise ] = useState ([])
    const [numberExercise, setExerciseNumber] = useState('')
    const [exerciseFounded,setExerciseFounded ] = useState({})
    

    
    async function exerciseById(){
       
        try {
            const { data } = await axios.get(`https://mini-projetom5-w86g.onrender.com/lower-exercise-Id/${numberExercise}`)
            setExerciseFounded(data)
            console.log(data);        
    
        } catch (error) {
          if(error.reponse.status === 404){
            console.log('exercicio não encontrado')
            setExerciseFounded(null)
          }else{
            console.log('erro ao buscar pelo id do exercicio')
          }
        }
         
    }
    
    
    const handle = (e) =>{
        setExerciseNumber(e.target.value)
      
        
    }
    useEffect ( () =>{
        exerciseById()    
        
    },[numberExercise])
    
    async function teste(){
        const { data } = await axios.get('https://mini-projetom5-w86g.onrender.com/all-lower-exercises')
        setExercise(data.lowerExercise)
        console.log(data.lowerExercise)
        console.log(exercise)
    }

    // async function teste(){
    //     const { data } = await axios.get('https://mini-projetom5-w86g.onrender.com/all-lower-exercises')
    //     setExercise(data.lowerExercise)
    //     console.log(data.lowerExercise)
    //     console.log(exercise)
    // }

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

                <input  onChange={handle} placeholder='digite o numero do exericio'/>
                </div>
            </div>
        </main>
    )
}

export default Main



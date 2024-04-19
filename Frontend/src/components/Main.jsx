import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Main.css';

function Main() {

    const [ exercise, setExercise ] = useState ('')

    async function teste(){
        const { data } = await axios.get('https://mini-projetom5-w86g.onrender.com/all-exercises')
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
                    <h2>teste</h2>
                </div>
            </div>
        </main>
    )
}

export default Main












    // const [ exerciseValue, setValue ] = useState('');
    // const [ exercise, setExrcise ] = useState({});

    // const getExercise = async (e) => {
    //     try {
    //         e.preventDefault()
    //         const  data = await axios.get(`https://mini-projetom5-w86g.onrender.com/lower-exercise-Id/${exerciseValue}`)
    //         const response = await data.json();
    //         if (!response){
    //             alert('Não foi possivel buscar o exercicio')
    //         }
    //     }
    //     catch (error){
    //         alert('Exercicio não encontrado')
    //         console.log('Algo deu errado', error)
    //     }
    // }

    // const eventHandle = (e) =>{
    //     setValue(e.target.value)
    // }

    // return(
    //     <>
    //     <form onSubmit={getExercise}>
    //         <label>
    //             <input 
    //                 type="text"
    //                 onChange={eventHandle}
    //                 placeholder='Escolha um numero de 1 a 10'
    //             />
    //         </label>

    //         <button type='submit'>Clique para realizar a busca</button>
    //         <h1>contador</h1>
    //         {exercise.nome && (
    //             <>
    //             <h1>{exercise.nome}</h1>
                
    //             </>
    //         )
            
    //         }
    //     </form>
    //     </>
    // )

import { useEffect, useState } from 'react';
import axios from 'axios';
import './Main.css';

function Main() {

    const [lowerExercise, setLowerExercise] = useState([])
    const [superiorsExercises, setSuperiorExercise] = useState([])
    const [allExercises, setAllExercise] = useState([])
    const [numberExercise, setExerciseNumber] = useState('')
    const [exerciseFounded, setExerciseFounded] = useState({})

    async function exerciseById() {
        try {
            const { data } = await axios.get(`https://mini-projetom5-w86g.onrender.com/lower-exercise-Id/${numberExercise}`)
            setExerciseFounded(data)
            console.log(data);
        } catch (error) {
            if (error.reponse.status === 404) {
                console.log('exercicio não encontrado!')
                setExerciseFounded(null)
            } else {
                console.log('erro ao buscar exercicío por Id!')
            }
        }
    }
    const handle = (e) => {
        setExerciseNumber(e.target.value)
    }
    useEffect(() => {
        exerciseById()
    }, [numberExercise])

    async function exercisesLower() {
        const { data } = await axios.get('https://mini-projetom5-w86g.onrender.com/all-lower-exercises')
        setLowerExercise(data.lowerExercises)
    }

    async function exerciseSuperiors() {
        const { data } = await axios.get('https://mini-projetom5-w86g.onrender.com/all-superiors-exercises')
        setSuperiorExercise(data.superiorsExercises)
    }

    async function showAllExercises() {
        const { data } = await axios.get('https://mini-projetom5-w86g.onrender.com/all-exercises')
        setAllExercise(data.superiorsExercises, data.lowerExercises)
    }

    return (
        
        <main>
            <div className='texts'>
                <div className='textDiv'>
                    <h2>Home Gym⚡</h2>
                    <p>
                        <br></br>
                        Fique em forma até mesmo dentro de casa! <br></br>
                        A Home Gym é um site que te retorna uma lista de exercícios físicos para fazer em casa, com uma série de repetições e você pode
                        escolher de 1 até 10 exercícios para treinar braços e pernas!
                    </p>
                </div>
                <div className='textDiv'>
                    <h2>Por que fazer exercícios físicos em casa?</h2>
                    <br></br>
                    <p>
                        Fazer exercícios físicos em casa tem se tornado cada vez mais importante por diversos motivos.
                        Primeiramente, é uma forma acessível e conveniente de se manter ativo, especialmente em períodos de restrições ou falta de tempo para frequentar academias ou espaços públicos.
                        Além disso, a prática regular de exercícios em casa contribui para a melhoria da saúde física e mental, ajudando a fortalecer músculos, articulações e ossos, além de aumentar a resistência cardiovascular.
                    </p>
                </div>
                <div className='textDiv'>
                    <h2>Mais saúde e bem estar!</h2>
                    <br></br>
                    <p>
                        Um ponto relevante é a promoção do bem-estar geral, incluindo a redução do estresse, ansiedade e depressão.
                        Além disso, praticar exercícios em casa permite maior flexibilidade de horários e a possibilidade de escolher atividades que sejam mais adequadas às preferências e necessidades individuais.
                    </p>
                </div>
            </div>
            <div className='main'>
                <div className='cards'>
                    <button title='Pernas' onClick={exercisesLower}>Exercícios de Perna</button>
                    {lowerExercise.map(exercise =>
                        <div key={exercise.id} className='cardsExercises'>
                            <h5>{exercise.Nome}</h5>
                            <p>{exercise.Repetições}</p>
                        </div>
                    )}
                </div>
                <div className='cards'>
                    <button title='Pernas' onClick={exerciseSuperiors}>Exercícios de Braço</button>
                    {superiorsExercises.map(exercise =>
                        <div key={exercise.id} className='cardsExercises'>
                            <h5>{exercise.Nome}</h5>
                            <p>{exercise.Repetições}</p>
                        </div>
                    )}
                </div>
                <div className='cards'>
                    <button title='Pernas' onClick={showAllExercises}>Todos os exercícios</button>
                    {allExercises.map(exercise =>
                        <div key={exercise.id} className='cardsExercises'>
                            <h5>{exercise.Nome}</h5>
                            <p>{exercise.Repetições}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='inputDiv'>
                <div className='inputExercise'>
                    <h3>DIGITE UM NÚMERO DE 1 A 10</h3>
                    <input onChange={handle} />
                </div>
            </div>
        </main>
    )
}

export default Main



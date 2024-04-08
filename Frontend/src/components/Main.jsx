import { Link } from 'react-router-dom';
import './Main.css';

export const Main = () => {
    return (
        <main>
            <div className='main'>
                <div>
                    <h2>Esolha um exercicio</h2>
                    <Link to={"http://localhost:7000/all-superiors-exercises"}><button>Superiores</button></Link>
                    <Link to={"http://localhost:7000/superiors-exercise-Id/:id"}><button>Superiores Por id</button></Link>
                    <div ></div>
                </div>
                <div>
                    <h2>teste</h2>
                </div>
            </div>
        </main>
    )
}
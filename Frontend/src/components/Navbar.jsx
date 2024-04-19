import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <Link to={`/`}><img src={logo} className="logo" alt="" /></Link>
            </div>
            <h2>
                <Link to={`/`}>Home</Link>
            </h2>
            <ul>
                <li>
                    <Link to={`https://mini-projetom5-w86g.onrender.com/all-lower-exercises`}>Pernas</Link>
                </li>
                <li>
                    <Link to={`https://mini-projetom5-w86g.onrender.com/all-exercises`} className="new-btn">teste</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
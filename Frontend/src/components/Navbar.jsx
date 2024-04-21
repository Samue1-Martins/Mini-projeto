import Logo from "../assets/images/homegymLogo.png"
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} />
            </div>
        </nav>
    )
}

export default Navbar
import { Link } from "react-router-dom";
import '../../styles/Header.css';
import Logo from '../../assets/Logo.svg';
 
function Header() {
    return (
    <header className="Header">
        <img src={Logo} alt ="logo de Kasa" className="logo" />
        <nav className="nav">
            <Link to="/" className="accueil">Accueil</Link>
            <Link to="/apropos" className="apropos">A propos</Link>
        </nav>
    </header>
    )
}

export default Header
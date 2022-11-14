import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "../Erreur/Erreur.css";
import { Link } from "react-router-dom";

function Erreur() {  
    return(
        <div>
        <Header/>
        <div className='erreur'>
            <div className='erreur404'>404</div>
            <p className='erreurmessage'>Oups! La page que<br/> vous demandez n'existe pas.</p>
            <Link to="/" className="Accueil">Retourner sur la page d’accueil</Link>
        </div>
        <Footer/> 
        </div>
    )
}

export default Erreur
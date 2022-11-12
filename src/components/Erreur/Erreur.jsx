import "../../styles/Erreur.css";
// import { Link } from "react-router-dom";

function Erreur() {  
    return(
        <div className='erreur'>
            <div className='erreur404'>404</div>
            <p className='erreurmessage'>Oups! La page que vous demandez n'existe pas.</p>
            {/* <Link to="/" className="Accueil">Retourner sur la page d’accueil</Link> */}
        </div>
    )
}

export default Erreur
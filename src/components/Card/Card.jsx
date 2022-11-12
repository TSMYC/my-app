import '../../styles/Card.css';
import { Link } from "react-router-dom";
import {useContext} from 'react';
import LogementsContext from '../../logements-context';
// import Fichelogement from '../../pages/Fichelogement';

function Card() {
    const logements = useContext(LogementsContext);
    console.log(logements);
    return(
        <div className='div'>
        <ul className='listelogement'>
            {logements.map((logement) =>
                <li key={logement.id}>
                    <Link to= {logement.id} className='card'>
                    <img src={logement.cover} alt ={logement.description} className="logementImage" />
                    <h1  className='titreCard'>{logement.title}</h1>
                    </Link>
                </li>

            )}
        </ul>
        </div>  
    )
}

export default Card;
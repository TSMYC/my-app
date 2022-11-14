import '../Card/Card.css';
import { Link } from "react-router-dom";
import {useContext} from 'react';
import LogementsContext from '../../logements-context';

function Card() {
    const logements = useContext(LogementsContext);
    console.log(logements);
    return(
        <div className='listelogement'>
            {logements.map((logement) =>
                <div key={logement.id} className='card'>
                    <Link to= {logement.id} className='cardlink'>
                        <img src={logement.cover} alt ={logement.description} className="logementImage" />
                        <h1  className='titreCard'>{logement.title}</h1>
                    </Link>
                </div>

            )}
        </div>  
    )
}

export default Card;
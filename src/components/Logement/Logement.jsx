import {useContext} from 'react';
import LogementsContext from '../../logements-context';
import { useParams } from 'react-router-dom';
import Rating from '../Rating/Rating';
import Carrousel from '../Carrousel/Carrousel';
import Collapse from '../Collapse/Collapse';

export default function Logement() {
    const logements = useContext(LogementsContext);
    let { id } = useParams();
    console.log(id);
    const logement = logements.find ((logement) =>  logement.id === id);
    if (logement === undefined){
        throw new Error("logement non trouvé");
    }
    console.log(logement.host.picture)
    const equipement = (logement.equipments).map((equipment) =>
    <li key={logement}>
        {equipment}
    </li> )
    return(
        <div>
             <div>
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
            </div>
            <div>
                <div>{logement.host.name}</div>
                <img src={logement.host.picture} alt="photot de l'hôte"/>
            </div>
            <Rating/>
            <Carrousel/>
            <Collapse title="Description" text={logement.description}/>
            <Collapse title ="Équipements" text ={equipement}/>
        </div>
    )
}



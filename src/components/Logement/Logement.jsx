import {useContext} from 'react';
import LogementsContext from '../../logements-context';
import { useParams } from 'react-router-dom';
import Rating from '../Rating/Rating';
import Carrousel from '../Carrousel/Carrousel';
import Collapse from '../Collapse/Collapse';
import Tag from "../Tag/Tag";
import "../Logement/logement.css";


export default function Logement() {
    // Recuperation de l'id du logement séléctioné
    const logements = useContext(LogementsContext);
    let { id } = useParams();
    console.log(id);
    const logement = logements.find ((logement) =>  logement.id === id);
    if (logement === undefined){
        throw new Error("logement non trouvé");
    }

    // Liste des équipements de chaque logement
    const equipement = (logement.equipments).map((equipment, index) =>
    <li key={index}>
        {equipment}
    </li> )

    return(
        <div className='divcontainer'>
            <Carrousel pictures={logement.pictures}/>
            <div className='host'>
                <div className='divlogement'>
                    <div className='informationlogement'>
                        <h1 className='titrelogement'>{logement.title}</h1>
                        <p className='location'>{logement.location}</p>
                    </div>
                    <Tag/>
                </div>
                <div className='hostrates'>
                    <div className='hostinformation'>
                        <div className='hostname'>{logement.host.name}</div>
                        <img src={logement.host.picture} alt="photot de l'hôte" className='photohote'/>
                    </div>
                    <Rating rating={logement.rating} className='rating'/>
                </div>
            </div>
            <div className='propriete'>
            <Collapse container = "container2" collapse = "collapse2" titre = "titre2"
            image = "image2" texte = "texte2" paragraphe="paragraphe2"
            title="Description" text={logement.description}/>
            <Collapse container = "container2" collapse = "collapse2" titre = "titre2"
            image = "image2" texte = "texte2" paragraphe="paragraphe2"
            title ="Équipements" text ={equipement}/>
            </div>
        </div>
    )
}



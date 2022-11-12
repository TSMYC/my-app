import {useContext} from 'react';
import LogementsContext from '../../logements-context';
import { useParams } from 'react-router-dom';
import Rightvector from '../../assets/Rightvector.svg';
import Leftvector from '../../assets/Leftvector.svg';
import { useState } from 'react';
import '../../styles/carrousel.css'

function Carrousel(){
    const logements = useContext(LogementsContext);
    let { id } = useParams();
    const logement = logements.find ((logement) =>  logement.id === id);
    const nombredephoto = logement.pictures.length;
    

    console.log(nombredephoto)
    // const index = (logement.pictures.indexOf('slide'));  
    const[activeIndex, setActiveIndex] = useState(1);

return(
    <div>
        <div >
        {logement.pictures.map((slide, index) => (
            <div

                key={index}
                className={(index + 1) === activeIndex ? "active" : "inactive"}>
                <img src={slide} alt=""  />
                <span>{index + 1}/{nombredephoto}</span>
            </div>

        ))}
        </div>
        
        {(nombredephoto > 1) &&
        <div className="vecteur">
        <img src={Leftvector} alt= "vecteur de gauche" style={{background: "red"}} onClick={() =>
        setActiveIndex(activeIndex < 2 ? nombredephoto : activeIndex -1 )} />
        <img src={Rightvector} alt= "vecteur de droite" style={{background: "red"}} onClick={() =>
        setActiveIndex(activeIndex===nombredephoto ? 1 : activeIndex + 1 )}/>
        </div>}

        </div>
)}

export default Carrousel;


   
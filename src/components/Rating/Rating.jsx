import Redstar from '../../assets/Redstar.svg';
import Greystar from '../../assets/Greystar.svg'
import {useContext} from 'react';
import LogementsContext from '../../logements-context';
import { useParams } from 'react-router-dom';


function Rating(){
    const logements = useContext(LogementsContext);
    let { id } = useParams();
    console.log(id);
    const logement = logements.find ((logement) =>  logement.id === id);
    let tab = [1, 2, 3, 4, 5];
    const etoile = logement.rating;
    const redstar = tab.filter (element =>  element <= etoile);
    const greystar = tab.filter(element => element > etoile);
    



return(
    <ul>
         {redstar.map((redelement)=>
            <li key={redelement}>
    <img src={Redstar} alt ="une etoile rouge"/>
            </li>)}

            {greystar.map((grayelement)=>
               <li key={grayelement}>
       <img src={Greystar} alt ="une etoile bleu"/>
               </li>)}
               </ul>
)}

export default Rating;

// let tab = [0, 1, 2, 3, 4];
// return(
//     <ul>
//         {tab.map((number)=>
//         <li key={number}>
            
//             {
//                 (logement.rating === number) ?
//             (<img src={Vector} alt="étoiles"/> ) : (<img src={Star} alt="étoiles"/>)
// }  
//         </li>
//         )}
//     </ul>




// const etoile = logement.rating;
// const etoiles = 5
// const houa = [etoiles - etoile]
// return(
//     <ul>
//         {etoile.map((chiffre)=>
//         <li key={chiffre}>
//             <img src={chiffre.Star} alt="étoiles"/> 
//         </li>
//         )}
//         {houa.map((number)=>
//         <li key={number}>
//             <img src={chiffre.Vector} alt="étoilesbleu"/> 
//         </li>
//         )}
//     </ul>
// )
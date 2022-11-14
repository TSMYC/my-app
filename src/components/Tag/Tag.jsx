import {useContext} from 'react';
import LogementsContext from '../../logements-context';
import { useParams } from 'react-router-dom';
import "../Tag/tag.css";

function Tag(){
    const logements = useContext(LogementsContext);
    let { id } = useParams();
    console.log(id);
    const logement = logements.find ((logement) =>  logement.id === id);
    return(
        <ul className='listetags'>
            {logement.tags.map((tag, index) =>
            <li key={index} className='tag'>
                {tag}
            </li>)}
        </ul>
    )
}

export default Tag;
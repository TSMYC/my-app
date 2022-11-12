import {useContext} from 'react';
import LogementsContext from '../../logements-context';
import { useParams } from 'react-router-dom';


function Tag(){
    const logements = useContext(LogementsContext);
    let { id } = useParams();
    console.log(id);
    const logement = logements.find ((logement) =>  logement.id === id);
    return(
        <ul className='listetags'>
            {logement.tags.map((tag) =>
            <li key={tag.id}>
                {tag}
            </li>)}
        </ul>
    )
}

export default Tag;
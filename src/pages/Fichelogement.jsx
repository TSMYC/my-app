import Tag from "../components/Tag/Tag";
import Collapse from "../components/Collapse/Collapse";
import Logement from "../components/Logement/Logement";


function Fichelogement() {

    return(
        <div>
            <div className='content'>
                <Tag/>
                <Collapse/>
            </div>
            <Logement/>
       </div>
    )
}

export default Fichelogement;
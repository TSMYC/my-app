import '../../styles/Banner.css';
import Banner from "../../assets/Banner.jpg";

function Banniere() {
    return(
        <div className='banniere'>
            <img src={Banner} alt ="bannière" className="Banner" /> 
            <h1 className='titlebanner'> {"Chez vous, partout et ailleurs"}</h1>
        </div>
    )
}

export default Banniere;
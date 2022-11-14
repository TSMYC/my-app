import { useState } from 'react';
import { FaChevronRight, FaChevronLeft} from "react-icons/fa";
import '../Carrousel/carrousel.css';

function Carrousel(props){
    const nombredephoto = props.pictures.length;
    const[activeIndex, setActiveIndex] = useState(0);

return(
    <div className='divcarrousel'>
        <img src={props.pictures[activeIndex]} alt="photos carrousel" className='picture'/>
        {nombredephoto>1?<div className='activeindex'>{activeIndex+1}/{nombredephoto}</div>:null}
        <FaChevronRight className='FaChevronRight'
        onClick={() =>setActiveIndex(activeIndex +1 === nombredephoto ? 0 : activeIndex +1 )}/>
        <FaChevronLeft className='FaChevronLeft'
        onClick={() =>setActiveIndex(activeIndex -1 < 0 ? nombredephoto-1 : activeIndex - 1 )}/>
    </div>
        
)}

export default Carrousel;


   
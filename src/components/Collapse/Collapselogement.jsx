import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../../styles/Collapselogement.css";

function Collapse(props) {
    const [open, setOpen] = useState(false);
        
    return (
            <div className='container2'>
                <div className='div-collapse2'>
                    <h1 className='title2'>{props.title}</h1>
                    <div className='image2' onClick={() => setOpen(!open)}>
                        {open? <FaChevronUp/> : <FaChevronDown />}
                    </div>
                </div>
                {open? 
                <div className='text'>
                    <p className='p-collapse2'>{props.text}</p>
                </div>:null}
            </div>
        
    );
}

export default Collapse;
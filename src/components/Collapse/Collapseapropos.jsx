import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../../styles/Collapseapropos.css";

function Collapse(props) {
    const [open, setOpen] = useState(false);
        
    return (
            <div className='container'>
                <div className='div-collaps'>
                    <h1 className='title'>{props.title}</h1>
                    <div className='image' onClick={() => setOpen(!open)}>
                        {open? <FaChevronUp/> : <FaChevronDown />}
                    </div>
                </div>
                {open? 
                <div className='text'>
                    <p className='p-collapse'>{props.text}</p>
                </div>:null}
            </div>
        
    );
}

export default Collapse;
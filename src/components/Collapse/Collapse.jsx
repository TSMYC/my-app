import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../Collapse/Collapse.css";

function Collapse(props) {
    const [open, setOpen] = useState(false);
        
    return (
            <div className={props.container}>
                <div className={props.collapse}>
                    <h1 className={props.titre}>{props.title}</h1>
                    <div className={props.image} onClick={() => setOpen(!open)}>
                        {open? <FaChevronUp/> : <FaChevronDown />}
                    </div>
                </div>
                {open? 
                <div className={props.texte}>
                    <p className={props.paragraphe}>{props.text}</p>
                </div>:null}
            </div>
        
    );
}

export default Collapse;
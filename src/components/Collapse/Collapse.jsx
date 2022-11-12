import React, { useState } from 'react';
import IconeCollapseOuvert from "../../assets/IconeCollapseOuvert.svg";
import IconeCollapseFerme from "../../assets/IconeCollapseFerme.svg";
import '../../styles/Collapse.css';

function Collapse(props) {
    const [close, setClose] = useState(false);
        
    return (
        close?(
            <div className='collapseFerme' >
               <h1 className='title'>{props.title}</h1>
                <div className='image' onClick={() => setClose(false)}>
                    <img src={IconeCollapseFerme} alt ="logo de collapse" className="iconeCollapse" /> 
                </div>
            </div>
        ) : (
            <div>
                <div className='collapseOuvert'>
                    <h1>{props.title}</h1>
                    <div onClick={() => setClose(true)}>
                        <img src={IconeCollapseOuvert} alt ="logo de collapse" />
                    </div>
                </div>
                <p>{props.text}</p>
            </div>
        )
        
    );
}

export default Collapse;
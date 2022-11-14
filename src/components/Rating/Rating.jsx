import { FaStar } from "react-icons/fa";


function Rating(props){
    let tab = [1, 2, 3, 4, 5];
    const etoile = props.rating;
return(
    <div className="rates">
        {tab.map(i => <FaStar key={i} fill= {i<=etoile ? "#FF6060" : "#E3E3E3"} size="30px"/> ) }
    </div>
);
}

export default Rating;


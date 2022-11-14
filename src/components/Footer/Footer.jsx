import '../Footer/Footer.css';
import Logofooter from "../../assets/Logofooter.svg"

function Footer() {
    return(
        <div className='footer'>
            <div className="footerdivlogo">
                <img src={Logofooter} alt ="logo de Kasa"  className="footerlogo"/>
            </div>
            <h1 className='titlefooter'>{"© 2020 Kasa. All rights reserved"}</h1>
        </div>
    )
}

export default Footer;
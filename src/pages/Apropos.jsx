import Collapse from "../components/Collapse/Collapse";
import Bannerapropos from "../assets/Bannerapropos.jpg";
import "../styles/Apropos.css"

function Apropos() {
    
    return( 
        <div>
            <img src={Bannerapropos} alt="banniere" className="banner-a-propos"/>
            <div>
                <Collapse container = "container1" collapse = "collapse1" titre = "titre1"
                image = "image1" texte = "texte1" paragraphe="paragraphe1"
                title = "Fiabilité"
                text = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>

                <Collapse container = "container1" collapse = "collapse1" titre = "titre1"
                image = "image1" texte = "texte1" paragraphe="paragraphe1"
                title ="Respect"
                text ="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>

                <Collapse container = "container1" collapse = "collapse1" titre = "titre1"
                image = "image1" texte = "texte1" paragraphe="paragraphe1"
                title ="Service"
                text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>

                <Collapse container = "container1" collapse = "collapse1" titre = "titre1"
                image = "image1" texte = "texte1" paragraphe="paragraphe1"
                title ="Sécurité"
                text ="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </div>
        </div>
    )
}

export default Apropos;
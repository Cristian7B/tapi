import tapi from "../../../assets/tapi-svg.svg"
import google from "../../../assets/google.svg"
import { Button } from "./Button"

export function Header() {
    return (
        <div className="containerHeader">
            <header className="descriptionPage">
                <img src={tapi} alt="" />
                <div className="textDescription">
                    <h1>Practica mecanografía utilizando <span>IA</span></h1>
                    <p>
                        Perfecciona tu velocidad y precisión en mecanografía con textos generados por IA. 
                        Mejora tus habilidades mientras practicas con contenido adaptado a tu nivel y estilo.
                    </p>
                    <div className="containerRedirectButtons">
                        <Button>Empezar</Button>
                        <button className="buttonLogin"><span><img src={google} alt="" /></span>Iniciar sesion</button>
                    </div>
                </div>
            </header>
        </div>
        
    )
}
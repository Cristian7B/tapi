import github from "../../../assets/github-dark.svg"
import linkedin from "../../../assets/linkedin.svg"
import discord from "../../../assets/discord.svg"
import { useAi } from "../../ai/hooks/useAi"
import { useLocation } from "react-router-dom"

export function Footer() {
    const {isActive} = useAi()
    const location = useLocation()
    return (
        <footer style={{display: location.pathname === "/practice" ? "none": "flex"}} className="footerContainer">
            
            <div className="leftSide">
                <p>&copy; Tapi. Todos los derechos reservados</p>
            </div>
            <div className="rightSide">
                <a className="socialMedia" href="http://github.com/Cristian7B/"><img src={github} alt="" /></a>
                <a className="socialMedia" href="https://www.linkedin.com/in/cristian-bonilla-77b4012aa/"><img src={linkedin} alt="" /></a>
                <a className="socialMedia" href="https://discord.com/invite/midudev"><img src={discord} alt="" /></a>
            </div>
        </footer>
    )
}
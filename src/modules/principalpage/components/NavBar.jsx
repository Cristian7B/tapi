import { Link } from "react-router-dom";
import { useAi } from "../../ai/hooks/useAi";

export function NavBar() {
    const {isActive, navBarStyle} = useAi()
    return (
        <nav style={{...navBarStyle, display: isActive ? "none": "block"}} className="navBarContainer">
            <ul>
                <div className="contentNav">
                    <div className="left">
                        <h1><Link to="/">Tapi</Link></h1>
                    </div>
                    <div className="right">
                        <p><Link to="/practice">Practicar</Link></p>
                        <p><a target="_blank" href="https://github.com/Cristian7B/tapi">GitHub</a></p>
                        <p><Link to="/tecnologies">Tecnologías</Link></p>
                    </div>
                </div>
            </ul>
        </nav>
    )
}
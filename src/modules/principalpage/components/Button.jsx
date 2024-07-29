import { Link } from "react-router-dom";

export function Button({children, onClick}) {
    return (
        <button onClick={onClick} className="buttonGo"><Link to="/practice">{children}</Link></button>
    )
}
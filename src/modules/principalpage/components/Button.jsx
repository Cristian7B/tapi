import { Link } from "react-router-dom";

export function Button({children}) {
    return (
        <button className="buttonGo"><Link to="/practice">{children}</Link></button>
    )
}
import { Link } from "react-router-dom";

export function Button({children, onClick}) {
    return (
        <Link 
            className="anchordForButton" 
            to="/practice"
        >
            <button 
                onClick={onClick} 
                className="buttonGo"
            >
                {children}
            </button>
        </Link>
    )
}
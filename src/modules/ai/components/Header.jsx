import { useEffect, useState } from "react";
import { useAi } from "../hooks/useAi";
import { Prompt } from "./Prompt";

export function Header() {
    const { setApiKey, style } = useAi();
    const [valueInput, setValueInput] = useState("");
    const [placeholder, setPlaceholder] = useState(false);

    const handleApiKey = (event) => {
        const newValue = event.target.value;
        setValueInput(newValue);
        setApiKey(newValue);
    };

    useEffect(() => {
        const apiLocal = window.localStorage.getItem("apiKey");
        if (apiLocal) {
            setApiKey(apiLocal);
            setValueInput(apiLocal);
        } else {
            setPlaceholder(true);
        }
    }, [setApiKey]);

    return (
        <header className="headerPractice">
            <div style={style} className="headerContainerPractice">
                <h1>¡Es hora de <span>practicar</span>!</h1>
                <input 
                    value={valueInput} 
                    placeholder={placeholder ? "Gemini Flash API Key" : ""} 
                    onChange={handleApiKey} 
                    type="text" 
                />
            </div>
            <Prompt />
        </header>
    );
}

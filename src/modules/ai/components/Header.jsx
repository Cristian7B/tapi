import { useEffect } from "react";
import { useAi } from "../hooks/useAi";
import { Prompt } from "./Prompt";
import { useState } from "react";

export function Header() {

    const {setApiKey, style} = useAi()
    const [valueInput, setValueInput] = useState(null)
    
    const handleApiKey = event => {
        setApiKey(event.target.value)
    }

    useEffect(() => {
        const apiLocal = window.localStorage.getItem("apiKey")
        if (apiLocal) {
            setApiKey(apiLocal)
            setValueInput(apiLocal)
        }
    }, [])


    return(
        <header className="headerPractice">
            <div style={style} className="headerContainerPractice">
                <h1>¡Es hora de <span>practicar</span>!</h1>
                <input value={valueInput ? valueInput: "Gemini Flash API Key"} onChange={handleApiKey} type="text" />
            </div>
            <Prompt/>
        </header>
    )
}
import { useAi } from "../hooks/useAi";
import { Prompt } from "./Prompt";

export function Header() {

    const {setApiKey, style} = useAi()
    
    const handleApiKey = event => {
        setApiKey(event.target.value)
    }


    return(
        <header className="headerPractice">
            <div style={style} className="headerContainerPractice">
                <h1>¡Es hora de <span>practicar</span>!</h1>
                <input onChange={handleApiKey} placeholder="Gemini Flash API Key" type="text" />
            </div>
            <Prompt/>
        </header>
    )
}
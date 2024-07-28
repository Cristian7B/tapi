import { Prompt } from "./Prompt";

export function Header({handleApiKey}) {
    return(
        <header className="headerPractice">
            <div className="headerContainerPractice">
                <h1>¡Es hora de <span>practicar</span>!</h1>
                <input onChange={handleApiKey} placeholder="Gemini Flash API Key" type="text" />
            </div>
            <Prompt/>
        </header>
    )
}
import { useState } from "react";
import { createContext } from "react";

export const AiContext = createContext()

export function AiProvider({children}) {
    const [apiKey, setApiKey] = useState(null)
    const [prompt, setPrompt] = useState("")
    const [showTextInput, setShowTextInput] = useState(true)
    const [firstTyping, setFirstTyping] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const style = {display: showTextInput ? "flex":"none"}
    const styleOf = {display: showTextInput ? "none": "flex"}

    return (
        <AiContext.Provider value={{apiKey, setApiKey, prompt, setPrompt, showTextInput, setShowTextInput, style, styleOf, firstTyping, setFirstTyping, isActive, setIsActive}}>
            {children}
        </AiContext.Provider>
    )
}
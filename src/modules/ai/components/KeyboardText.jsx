import { useId, useState } from "react"
import { generateTextFromPrompt } from "../generateText"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { Header } from "./Header"
import { useAi } from "../hooks/useAi"

export function KeyboardText() {
    const [promptUser, setPromptUser] = useState("Hazme un texto de 40 palabras sobre caperucita roja.")
    const [isCode, setIsCode] = useState(false)
    const [lenguaje, setLenguaje] = useState("")
    const [textShow, setTextShow] = useState("")
    const [apiKey, setApiKey] = useState(null)
    const {isActive} = useAi()

    const handleApiKey = (event) => {
        setApiKey(event.target.value)
    }

    const idInput = useId()
    const checkboxCode = useId()    

    const handlePrompt = event => {
        setPromptUser(event.target.value)
    }

    const receiveText = async () => {
        const keyboardTextShow = await generateTextFromPrompt(apiKey, isCode, lenguaje, promptUser)
        setTextShow(keyboardTextShow)
    }

    const handleLanguage = event => {
        setLenguaje(event.target.value)
    }


    const handleIsCode = () => {
        setIsCode(prevState => !prevState)
    }


    return (
        <div style={{width: isActive ? "100%":"auto"}} className="all">
            <Header handleApiKey={handleApiKey}/>
        </div>
    )
}
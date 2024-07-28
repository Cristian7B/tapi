import { useId, useState } from "react"
import { generateTextFromPrompt } from "../generateText"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { selectCodeType } from "../utils/consts"
import { Header } from "./Header"

export function KeyboardText() {
    const [promptUser, setPromptUser] = useState("Hazme un texto de 40 palabras sobre caperucita roja.")
    const [isCode, setIsCode] = useState(false)
    const [lenguaje, setLenguaje] = useState("")
    const [textShow, setTextShow] = useState("")

    const [apiKey, setApiKey] = useState(null)

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
        <div className="all">
            <Header handleApiKey={handleApiKey}/>
            {/* <div className="inputPrompt">
                <div className="inputAll">
                    <input type="text" placeholder="apikey" onChange={handleApiKey}/>
                    <input value={promptUser} placeholder={promptUser} type="text" id={idInput} onChange={handlePrompt}/>
                    
                    <input onChange={handleIsCode} id={checkboxCode} type="checkbox" />
                    <label htmlFor={checkboxCode}>¿Es código?</label>
                    
                    <select className="mt-6" onChange={handleLanguage} name="language">
                        {
                            selectCodeType.map(language => (
                                <option key={language} value={language}>{language}</option>
                            ))
                        }
                    </select>
                </div>
                <button onClick={receiveText}>Enviar</button>
            </div>
            <div style={{display: "none"}} className="textContainer">
                {
                    isCode ? 
                        (
                            <SyntaxHighlighter language={lenguaje} style={dracula}>
                                {textShow}
                            </SyntaxHighlighter>
                        ) : <p className="normalText">{textShow}</p>   
                }
            </div> */}
        </div>
    )
}
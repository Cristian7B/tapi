import { useEffect, useRef, useState } from "react";
import { Switch } from "../../../components/ui/switch";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../principalpage/components/Button";
import { generateTextFromPrompt } from "../generateText";
import { useAi } from "../hooks/useAi";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { PulseLoader } from "react-spinners";

export function Prompt() {
    const {apiKey, prompt, setPrompt} = useAi()
    const [isCode, setIsCode] = useState(false)
    const [lenguaje, setLenguaje] = useState("")
    const [textShow, setTextShow] = useState("")
    const [loading, setLoading] = useState(false);
    const {showTextInput, setShowTextInput, style, styleOf} = useAi()

    const handlePrompt = event => {
        setPrompt(event.target.value)
    }
    const receiveText = async () => {   
        setLoading(true)
        setShowTextInput(prevState => !prevState)
        try {
            const keyboardTextShow = await generateTextFromPrompt(apiKey, isCode, lenguaje, prompt);
            setTextShow(keyboardTextShow);
        } catch (error) {
            console.error("Error al generar el texto:", error);
        } finally {
            setLoading(false)
        }
    };

    const reset = () => {
        setShowTextInput(prevState => !prevState)
    }
    return (
        <div className="containerPrompt">
            <div className="upLayout">
                <Button onClick={showTextInput ? receiveText : reset}>
                    {showTextInput ? "Generar": "Volver a generar"}
                </Button>
                <div className="settings">
                    <div className="switchContainer">
                        <Switch className="oficialSwitch"/>
                        <p>Modo código</p>
                    </div>
                </div>
            </div>
            <Textarea style={style} onChange={handlePrompt} className="inputPromptUser" placeholder="Ingresa tu prompt para generar el texto."/>
            <div style={styleOf} className="textContainer">
            {loading ? (
                    <div className="loaderContainer">
                        <PulseLoader color="#EEE1B3" speedMultiplier={1.2}/>
                    </div>
                ) : isCode ? (
                    <SyntaxHighlighter language={lenguaje} style={dracula}>
                        {textShow}
                    </SyntaxHighlighter>
                ) : (
                    <p className="normalText">{textShow}</p>
                )}
            </div>
        </div>
    )
}
import { useEffect, useRef, useState } from "react";
import { Switch } from "../../../components/ui/switch";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../principalpage/components/Button";
import { generateTextFromPrompt } from "../generateText";
import { useAi } from "../hooks/useAi";
import { PulseLoader } from "react-spinners";
import { saveApi } from "../local/localApiKey";
import { Practice } from "./Practice";

export function Prompt() {
    const {apiKey, prompt, setPrompt, isActive} = useAi()
    const [isCode, setIsCode] = useState(false)
    const [lenguaje, setLenguaje] = useState("")
    const [opacity, setOpacity] = useState(false)
    const [textShow, setTextShow] = useState("")
    const [loading, setLoading] = useState(false);
    const {showTextInput, setShowTextInput, style, styleOf} = useAi()

    const firstWordRef = useRef(null);
    const firstLetterRef = useRef(null);

    useEffect(() => {
        if (firstWordRef.current && firstLetterRef.current) {
            firstWordRef.current.classList.add('active');
            firstLetterRef.current.classList.add('active');
        }
    }, []);

    const opacityStyle = {
        opacity: opacity ? "0.6": "1"
    }

    const handlePrompt = event => {
        setPrompt(event.target.value)
    }
    const receiveText = async () => {   
        setLoading(true)
        saveApi(apiKey)
        setOpacity(prevState => !prevState)
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
        setOpacity(prevState => !prevState)
    }
    return (
        <div style={{width: isActive ? "100%":"840px"}} className="containerPrompt">
            <div style={{...opacityStyle, display: isActive ? "none": "flex"}} className="upLayout">
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
            {
                loading ? (
                    <div className="loaderContainer">
                        <PulseLoader color="#EEE1B3" speedMultiplier={1.2}/>
                    </div>
                ) : (
                    <Practice textShow={textShow}/>
                )
            }
            </div>
        </div>
    )
}
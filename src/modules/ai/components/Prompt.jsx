import { useEffect, useRef, useState } from "react";
import { Switch } from "../../../components/ui/switch";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../principalpage/components/Button";
import { generateTextFromPrompt } from "../generateText";
import { useAi } from "../hooks/useAi";
import { PulseLoader } from "react-spinners";
import { saveApi } from "../local/localApiKey";
import { Practice } from "./Practice";
import { Settings } from "./Settings";
import { toast, Toaster } from "sonner"
import infoIcon from "../../../assets/infoIcon.svg"
import tippy from "tippy.js";
import 'tippy.js/dist/tippy.css'; 
import 'tippy.js/animations/scale-subtle.css';

export function Prompt() {
    const { 
        apiKey, 
        prompt, 
        setPrompt, 
        isActive, 
        showTextInput, 
        setShowTextInput, 
        style, 
        styleOf, 
        controlErrorOfApiKey, 
        setControlErrorOfApiKey, 
        setCurrentTime, 
        setFirstTyping,
        opacity, 
        setOpacity
    } = useAi();

    const [textShow, setTextShow] = useState("");
    const [loading, setLoading] = useState(false);

    const firstWordRef = useRef(null);
    const firstLetterRef = useRef(null);

    const opacityStyle = {
        opacity: opacity ? "0.6" : "1"
    };

    const handlePrompt = (event) => {
        setPrompt(event.target.value);
    };

    tippy("#infoForToolTip", {
        content: "¡Próximamente!",
        arrow: false,
        animation: "scale-subtle"
    })

    const receiveText = async () => {   
        setLoading(true);
        saveApi(apiKey);

        try {
            const keyboardTextShow = await generateTextFromPrompt(apiKey, false, "", prompt);

            setShowTextInput(prevState => !prevState);
            setOpacity(prevState => !prevState);

            setControlErrorOfApiKey(true)

            setTextShow(keyboardTextShow.slice(0, -2));
        } catch (error) {
            setControlErrorOfApiKey(false);
        } finally {

            const interval = setTimeout( ()=> {
                setLoading(false);
            }, 2000)

            interval()
            clearInterval(interval)
        }
    };

    const reset = () => {
        setCurrentTime(30)
        setFirstTyping(false)
        setShowTextInput(prevState => !prevState)
        setOpacity(prevState => !prevState)
    };

    return (
        <div 
            style={{ width: isActive ? "100%" : "840px" }} 
            className="containerPrompt"
        >
            <Toaster toastOptions={{
                className: "toastForError"
            }} richColors/>

            <div 
                style={{ ...opacityStyle, display: isActive ? "none" : "flex" }} 
                className="upLayout"
            >
                <Button 
                    onClick={showTextInput ? receiveText : reset}>
                    {showTextInput ? "Generar" : "Volver a generar"}
                </Button>

                <div className="settings">
                    <div 
                        style={{pointerEvents: opacity ? "none": "all"}} 
                        className="switchContainer"
                    >
                        <div className="switchLayout">
                            <Switch className="oficialSwitch"/>
                            <p>Modo código</p>
                            <img 
                                id="infoForToolTip"
                                src={infoIcon} 
                                className="w-4" 
                                alt="Icono de mas información" 
                            />
                        </div>
                        <Settings/>
                    </div>
                </div>
            </div>
            <Textarea 
                style={style} 
                onChange={handlePrompt} 
                className="inputPromptUser" 
                placeholder="Ingresa tu prompt para generar el texto."
            />

            <div 
                style={styleOf} 
                className="textContainer"
            >
                {loading ? (
                    <div className="loaderContainer">
                        <PulseLoader 
                            color="#EEE1B3" 
                            speedMultiplier={1.2} />
                    </div>
                ) : (
                    controlErrorOfApiKey ? 
                    <Practice textShow={textShow} /> 
                    : 
                    toast.error("Hubo un error con la API Key, revisala.")
                )}
            </div>
        </div>
    );
}

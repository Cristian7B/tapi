import { Switch } from "../../../components/ui/switch";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../principalpage/components/Button";

export function Prompt() {
    return (
        <div className="containerPrompt">
            <div className="upLayout">
                <Button>
                    Generar
                </Button>
                <div className="settings">
                    <div className="switchContainer">
                        <Switch
                        />
                        <p>Modo código</p>
                    </div>
                </div>
            </div>
            <Textarea className="inputPromptUser" placeholder="Ingresa tu prompt para generar el texto." />
        </div>
    )
}
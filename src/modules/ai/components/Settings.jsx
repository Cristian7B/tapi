import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
} from "../../../components/ui/dialog"

import iconSettings from "../../../assets/settings.svg"
import { useState } from "react"
import { useAi } from "../hooks/useAi"
import { useEffect } from "react"
import { saveTimePrev } from "../local/localTime"

export function Settings() {
    const [showModal, setShowModal] = useState(false)
    const {currentTime, setCurrentTime, setTimeForLocal, timeForLocal} = useAi()
    const handleActiveModal = () => {
        setShowModal(true)
    }

    useEffect(() => {
        const timePrev = window.localStorage.getItem("timePrev");
        if (timePrev) {
            setTimeForLocal(timePrev)
            setCurrentTime(timePrev)
        } 
    }, [])

    const hideActiveModal = () => {
        setShowModal(false)
    }

    const changeTime = (e) => {
        setCurrentTime(e.target.value)
        setTimeForLocal(e.target.value)
        saveTimePrev(e.target.value)
    }


    return (
        <>
            <div 
                onClick={handleActiveModal} 
                className="showSettings"
            >
                <img 
                    src={iconSettings} 
                    className="settingsIcon" 
                    alt="" 
                />
            </div>
            <Dialog open={showModal} >
                <DialogContent className="sm:max-w-md dialogStyle">
                <DialogHeader>
                    <h1 style={{marginBottom: "20px"}}>Configuraciones</h1>
                    <div className="inputForTime">
                        <label htmlFor="inputTime">Tiempo</label>
                        <input 
                            type="number" 
                            id="inputTime" 
                            onChange={changeTime} 
                        />
                    </div>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <button 
                        type="button" 
                        onClick={hideActiveModal} 
                        className="buttonCloseDialog"
                    >
                        Configurar
                    </button>
                </DialogFooter>
                </DialogContent>
            </Dialog>
        
        </>
    )
}
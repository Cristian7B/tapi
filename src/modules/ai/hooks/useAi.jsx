import { useContext } from "react"
import { AiContext } from "../context/AiContext"

export function useAi() {
    const context = useContext(AiContext)
    if (context === undefined) {
        throw new Error("Contexto no envuelve esto!")
    }
    return context
}
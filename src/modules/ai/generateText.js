import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import { formatCodeString } from "./utils/codeFormatted";


export async function generateTextFromPrompt(apiKey, isCode, lenguaje, promptUser) {
    const google = createGoogleGenerativeAI({
        apiKey: apiKey,
        baseURL: "https://generativelanguage.googleapis.com/v1beta",
    });

    
    
    const { text } = isCode ? await generateText({
        model: google('models/gemini-1.5-flash-latest'),
        temperature: 0.5,
        system: `Eres un asistente que crea textos para practicar la mecanografia de las personas. ¡NO ME DES EL LENGUANJE DE PROGRAMACION SI ES CODIGO!
        Crearas textos de acuerdo a un prompt del usuario, solo 
        brindaras el texto con el cual práticar y ninguna otra palabra o frase, se conciso con tus respuestas,
        no añadas etiquetas ni comentarios si es código, solo la porcion de texto a digitar. La longitud del texto midela con respecto al tiempo en que
        el usuario se demorará, que un usuario promedio no se demore más de 40 segs. Si es una porcion de código, brindala para insertarla en una etiqueta
        p de html, y que no sea necesario formatearla.`,
        prompt: `Hola asistente, ${promptUser} de ${lenguaje}`
    }): await generateText({   
        model: google('models/gemini-1.5-flash-latest'),
        
        system: `Eres un asistente que crea textos para practicar la mecanografia de las personas. ¡NO ME DES EL LENGUANJE DE PROGRAMACION SI ES CODIGO!
        Crearas textos de acuerdo a un prompt del usuario, solo 
        brindaras el texto con el cual práticar y ninguna otra palabra o frase, se conciso con tus respuestas,
        no añadas etiquetas ni comentarios si es código, solo la porcion de texto a digitar. La longitud del texto midela con respecto al tiempo en que
        el usuario se demorará, que un usuario promedio no se demore más de 40 segs. Si es una porcion de código, brindala para insertarla en una etiqueta
        p de html, y que no sea necesario formatearla.`,

        prompt: `Hola asistente, ${promptUser}`
    })
    
    const match = /```(\w+)\n([\s\S]*?)```/.exec(text);
    const formattedCode = match ? formatCodeString(text, match[1]) : text

    return formattedCode
}




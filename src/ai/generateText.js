import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const google = createGoogleGenerativeAI({
    apiKey: import.meta.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta",
});

export const { text } = await generateText({
    model: google('models/gemini-1.5-flash-latest'),
    maxTokens: 100,
    prompt: 'Eres un asistente que crea textos para practicar la mecanografia de las personas de acuerdo a un prompt, solo brindaras el texto con el cual práticar y ninguna otra palabra o frase, no añade etiquetas al código, solo la porcion de codigo a digitar. Crea una funcion python un poco extensa para un persona que mas o menos se demore 30 segundos en escribirla',
});

console.log(text)
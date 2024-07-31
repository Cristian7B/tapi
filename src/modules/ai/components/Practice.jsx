import { useEffect } from "react";
import { useRef } from "react";

export function Practice({textShow}) {
    const firstWordRef = useRef(null);
    const firstLetterRef = useRef(null);
    const inputRef = useRef(null)

    const paragraphRef = useRef(null)
    useEffect(() => {

        const keyDown = () => {

        }

        const keyUp = () => {
            const $currentWord = paragraphRef.current.querySelector("x-word.active")
            const currentLetter = $currentWord.querySelector("x-letter.active")
    
            const currentWord = $currentWord.innerText.trim()
            inputRef.current.maxLength = currentWord.length
    
            const allLetters = $currentWord.querySelectorAll("x-letter")
    
            allLetters.forEach(letter => letter.classList.remove("correct", "incorrect"))
    
            inputRef.current.value.split("").forEach((char, index) => {
                const $letter = allLetters[index]
                const letterToCheck = currentWord[index]
    
                const isCorrect = char == letterToCheck
    
                const classLetter = isCorrect ? "correct":"incorrect"
    
                $letter.classList.add(classLetter)
            })
    
            currentLetter.classList.remove("active", "is-last")
    
    
    
            const inputLength = inputRef.current.value.length
            const $nextLetter = allLetters[inputLength]
            if ($nextLetter) {
                allLetters[inputLength].classList.add("active")
            }
            else {
                currentLetter.classList.add("active", "is-last")
            }
        }

        if (firstWordRef.current && firstLetterRef.current) {
            firstWordRef.current.classList.add('active');
            firstLetterRef.current.classList.add('active');
        }

        const letterCount = firstWordRef.current ? firstWordRef.current.querySelectorAll('x-letter').length : 0;
        inputRef.current.maxLength = letterCount

        const handleDocumentKeyDown = () => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        };

        document.addEventListener("keydown", handleDocumentKeyDown);

        inputRef.current.addEventListener("keydown", keyDown)
        inputRef.current.addEventListener("keyup", keyUp)

        return(() => {
            document.removeEventListener("keydown", handleDocumentKeyDown)
            if (inputRef.current) {
                inputRef.current.removeEventListener("keydown", keyDown);
                inputRef.current.removeEventListener("keyup", keyUp);
            }        
        })
    }, []);

    return (
        <section className="normalText">
            <input ref={inputRef} type="text" autoFocus className="controlInput"/>
            <p ref={paragraphRef}>
                {
                    textShow.split(" ").map((word, wordIndex) => {
                        const letters = word.split("");
                        return (
                            <x-word ref={wordIndex === 0 ? firstWordRef: null} key={wordIndex}>
                                {letters.map((letter, letterIndex) => (
                                    <x-letter ref={wordIndex === 0 && letterIndex === 0 ? firstLetterRef: null} key={letterIndex}>{letter}</x-letter>
                                ))}
                            </x-word>
                        );
                    })
                } 
            </p>
        </section>
    )
}
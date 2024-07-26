import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { formatCodeString } from "./modules/ai/utils/codeFormatted";
import { KeyboardText } from "./modules/ai/components/KeyboardText";
import {Landing} from "./modules/principalpage/components/Landing"
import icon from "./assets/icon.svg"
function App() {
  return (
    <>
      <Landing/>
      {/* <KeyboardText/> */}
      <div style={{height:"1000px"}}>

      </div>
    </>

  )
}

export default App

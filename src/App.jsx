import {Landing} from "./modules/principalpage/components/Landing"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { NavBar } from "./modules/principalpage/components/NavBar"
import { KeyboardText } from "./modules/ai/components/KeyboardText"
import { Footer } from "./modules/principalpage/components/Footer"


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/practice" element={<KeyboardText/>}/>
      </Routes>
      <Footer/>
    </Router>  
  )
}

export default App

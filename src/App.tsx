import { BrowserRouter, Routes, Route } from "react-router-dom"


import styles from "./App.module.css"

// pages
import Repos from "./pages/Repos"
import Home from "./pages/Home"

function App() {
  

  return (
    
    <div className={styles.app}>
        <h1>GitHub Finder</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/repos/:userName" element={<Repos />}/>
          </Routes>
        </BrowserRouter>
    </div>  
  )
}

export default App

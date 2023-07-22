import React, { useState } from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
import About from './components/About'
import ProjectComp from './components/project/ProjectComp'
import Contact from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState("false")
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
    <div className={`px-5 bg-[#F0EEED] dark:bg-gray-900 md:px-7 lg:px-10`}>
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Main />
        <About />
        <ProjectComp />
        <Contact />
    </div>
    </div>
  )
}

export default App
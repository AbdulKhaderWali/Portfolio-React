import React, { useState } from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
  const [darkMode, setDarkMode] = useState("false")
  return (
    <div className={darkMode? "dark" : ""}>
    <div className={`px-5 dark:bg-gray-900 min-h-screen md:px-7 lg:px-10`}>
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Main />
    </div>
    </div>
  )
}

export default App
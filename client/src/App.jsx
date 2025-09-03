import { useState } from 'react'
import { Routes, Route } from 'react-router'
import { BrowserRouter } from "react-router";

import Navbar from './Components/Navbar'
import Home from './Home'
import Work from './Work'
import Experience from './Experience'
import ContactMe from './ContactMe'
import './App.css'

function App() {

  const [ showDownload, setShowDownload ] = useState(false)

  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Home showDownload={showDownload} setShowDownload={setShowDownload} />} />
        <Route path='/mywork' element={<Work showDownload={showDownload} setShowDownload={setShowDownload} />} />
        <Route path='/experience' element={<Experience showDownload={showDownload} setShowDownload={setShowDownload} />} />
        {/* <Route path='/experience' element={<Experience />} /> */}
        <Route path='/contact' element={<ContactMe showDownload={showDownload} setShowDownload={setShowDownload} />} />
      </Routes>
    </>
  )
}

export default App

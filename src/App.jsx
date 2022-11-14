import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Navbar from './Components/Navbar'
import Body from './Components/Body'

import Buttons from './Components/Buttons'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="minidiv">
        <h1>Welcome to my home page!</h1>
      </div>
      <Navbar />      
      <Body />
      {/* <Sidebar /> */}
      {/* 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="Gallery" element={<Gallery />} />
              <Route path="Socials" element={<Socials />} />

          </Route>
        </Routes>
      </BrowserRouter> */}


    </div>
  )
}

export default App

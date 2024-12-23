// import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import Blue from "./components/Blue.jsx"
import Red from "./components/Red.jsx"
import Home from "./components/Home.jsx"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <div id="container">
      <h1></h1>
      <div id="navbar"> 
        <Link to= "/blue" > Blue </Link>
        <Link to= "/red" > Red </Link>
        <Link to= "/">Home </Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path= "/blue" element= {<Blue/>}/>
          <Route path= "/red" element= {<Red/>}/>
          <Route path= "/" element= {<Home/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App

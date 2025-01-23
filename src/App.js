import './App.css';
import React from 'react'
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './components/inc/NavBar'
import Home from './components/pages/Home'
import TMT from './components/pages/TMT'
import BCH from './components/pages/BCH'
import Morse from './components/pages/Morse'
import ER from './components/pages/ER'
import Gallery from './components/pages/Gallery';

function App(){
  return(
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/tmt" element={<TMT/>}/>
        <Route path="/bch" element={<BCH/>}/>
        <Route path ="/morse" element={<Morse/>}/>
        <Route path ="/eucharistic_revival" element={<ER/>}/>  
        <Route path ="/gallery" element={<Gallery/>}/>  
        <Route path ="/gallery/:folder" element={<Gallery/>}/>  
      </Routes>
    </Router>
  )
}
export default App
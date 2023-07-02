import './App.css';
import React from 'react'
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './components/inc/NavBar'
import Home from './components/pages/Home'
import TMT from './components/pages/TMT'
import BCH from './components/pages/BCH'
import Morse from './components/pages/Morse'
import { BrowserRouter } from 'react-router-dom';

function App(){
  return(
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/TMT" element={<TMT/>}/>
        <Route path="/BCH" element={<BCH/>}/>
        <Route path ="/Morse" element={<Morse/>}/> 
      </Routes>
    </Router>
  )
}
export default App
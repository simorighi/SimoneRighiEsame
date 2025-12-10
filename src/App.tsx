import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Navbar from './components/navbar';

function App() {

  return (
    <>
      
      <Router>
        <Routes>
          
          <Route path='/' element={<Navbar/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route/>
        </Routes>
      </Router>
    </>
  )
}

export default App

import React from 'react';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Myproj from './components/Myprojects';
import Navbar from './components/Navbar';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="box">
          <Navbar />
          <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/myproj' element={<Myproj />} />
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}
export default App
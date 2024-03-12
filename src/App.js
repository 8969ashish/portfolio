import React from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Skill from './pages/Skill';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import { Route,Routes } from 'react-router-dom';

import Testimonials from './pages/Testimonials'



const App = () => {
  return (
    <div>
     
   <Navbar/> 
  

<Routes>

    <Route path='/' element={<Home/>} ></Route>
    <Route path='/About' element={<About/>} ></Route>
    <Route path="/Skill" element={<Skill/>} ></Route>
    <Route path='/Contact' element={<Contact/>} ></Route>
    <Route path='/Project' element={<Project/>} ></Route>
    <Route path='/Testimonials' element={<Testimonials/>} ></Route>
    
</Routes>

    </div>
  )
}

export default App

import React, {  Component } from 'react';

import { BrowserRouter ,  Route,Router, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import Index from './Components/Index';
import Contact from './Components/Contact';

import Work from './Components/Work';
import About from './Components/About';
import Profile from './Components/Profile';
import Portofolio from './Components/Portofolio';
class App extends  Component{
  render(){
    return(
     
    
<BrowserRouter> 
   

  <Navbar />
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Work" element={<Work />} />
   
    <Route path="/About" element={<About />} />
    <Route path="/Profile" element={<Profile />} />
     <Route path="/Portofolio" element={<Portofolio />} />
  </Routes>

</BrowserRouter> 
   
    )
  }
}
export default App;

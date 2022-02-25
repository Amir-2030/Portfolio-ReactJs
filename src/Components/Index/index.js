
import React, { Component } from 'react';
import Home from './../Home';
import Work from './../Work';
import Portofolio from './../Portofolio';
import Profile from './../Profile';
import About from './../About';
import Social from './../Social';
import Footer from './../Footer';

class Index extends  Component{
  render(){
    return(
      <div>
    <Home />
    <Work />
    <Portofolio />
    <Profile />
    <About />
    <Social />
    <Footer />
      </div>
    )
  }
}
export default Index;

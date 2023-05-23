import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Experience from './components/Experience';

import Footer from './components/Footer';



function App() {

  return (
    <div  >

      <Navbar/>
      <Home />
      <About/>
      <Experience/>
      <Footer/>
      <SocialLinks/>
 
     

    </div>

  );
}

export default App;

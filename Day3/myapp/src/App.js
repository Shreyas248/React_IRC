import React from 'react';
import Navbar from './Components/Nav'
import Home from './Components/Home';
import Footer from './Components/Footer'
import './assets/css/Footer.css';
import './assets/css/Nav.css';
import './assets/css/Home.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
};

export default App;
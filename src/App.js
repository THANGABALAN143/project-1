import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <About />
      <Contact />
    </>
    
  );

  
}

export default App;


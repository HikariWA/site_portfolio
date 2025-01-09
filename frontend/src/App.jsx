import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext'; 
import HomePage from './Components/HomePage/HomePage';
import About from './Components/About/About';
import Expertise from './Components/Expertise/Expertise';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <ThemeProvider>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage  />} />
            <Route path="/expertise" element={<Expertise  />} />
            <Route path="/about" element={<About  />} />
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;


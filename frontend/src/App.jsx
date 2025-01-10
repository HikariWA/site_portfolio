import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext'; 
import HomePage from './Components/HomePage/HomePage';
import About from './Components/About/About';
import Expertise from './Components/Expertise/Expertise';
import Navbar from './Components/Navbar/Navbar';
import Members from './Components/Members/Members';
import Contact from './Components/Contact/Contact';
import AnimatedText from './Components/HomePage/AnimatedText/AnimatedText';


function App() {
  return (
    <ThemeProvider>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage  />} />
            <Route path="/expertise" element={<Expertise  />} />
            <Route path="/members" element={<Members  />} />
            <Route path="/about" element={<About  />} />
            <Route path="/contact" element={<Contact  />} />
            <Route path="/animated-txt" element={<AnimatedText  />} />

          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;


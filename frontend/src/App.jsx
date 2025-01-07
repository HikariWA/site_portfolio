import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext'; 
import HomePage from './Components/HomePage/HomePage';
import Test from './Components/Test/Test';
import About from './Components/About/About';


function App() {
  return (
    <ThemeProvider>
      <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<HomePage  />} />
            <Route path="/test" element={<Test  />} />
            <Route path="/about" element={<About  />} />
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;


import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Project from './Project';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
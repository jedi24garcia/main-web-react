import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
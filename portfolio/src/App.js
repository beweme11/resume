import React from 'react';
import './App.css'; // Import CSS for styling
import Home from './Homepage';
import Navbar from './Navbar';
import Features from './Features';
import BuildPage from './Buildresume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/build" element={<BuildPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

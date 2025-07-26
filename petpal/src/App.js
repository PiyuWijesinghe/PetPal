import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import Adopt from './pages/Adopt';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;

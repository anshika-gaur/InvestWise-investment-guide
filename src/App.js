import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stocks from './pages/Stocks';
import Bonds from './pages/Bonds';
import MutualFunds from './pages/MutualFunds';
import ETFs from './pages/ETFs';
import Crypto from './pages/Crypto';
import Calculator from './pages/Calculator';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/bonds" element={<Bonds />} />
          <Route path="/mutual-funds" element={<MutualFunds />} />
          <Route path="/etfs" element={<ETFs />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

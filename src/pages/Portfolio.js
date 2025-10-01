import React, { useState, useEffect } from 'react';
import PortfolioTracker from '../components/PortfolioTracker';
import PortfolioChart from '../components/PortfolioChart';

const Portfolio = () => {
  const [investments, setInvestments] = useState([]);

  // Load from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('investments');
    if (saved) {
      setInvestments(JSON.parse(saved));
    }
  }, []);

  // Save to LocalStorage whenever investments change
  useEffect(() => {
    localStorage.setItem('investments', JSON.stringify(investments));
  }, [investments]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Your Portfolio Tracker</h1>
        <p className="text-lg text-center mb-10">Add your investments and see your portfolio allocation at a glance.</p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <PortfolioTracker investments={investments} setInvestments={setInvestments} />
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <PortfolioChart investments={investments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

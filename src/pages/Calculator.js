import React from 'react';
import InvestmentCalculator from '../components/InvestmentCalculator';

const Calculator = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Investment Calculator</h1>
        <p className="text-lg text-center mb-8">Calculate your potential returns with our ROI calculator. Enter your investment details below.</p>
        <div className="flex justify-center">
          <InvestmentCalculator />
        </div>
      </div>
    </div>
  );
};

export default Calculator;

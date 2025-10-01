import React, { useState } from 'react';

const InvestmentCalculator = () => {
  const [amount, setAmount] = useState('');
  const [years, setYears] = useState('');
  const [rate, setRate] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const principal = parseFloat(amount);
    const time = parseFloat(years);
    const interestRate = parseFloat(rate) / 100;

    if (principal && time && interestRate) {
      // This is Compound interest formula: A = P(1 + r/n)^(nt) assuming annual compounding
      const returns = principal * Math.pow(1 + interestRate, time);
      setResult(returns.toFixed(2));
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-green-800 text-center">Investment Calculator</h3>

      <div className="space-y-6">
        <input
          type="number"
          placeholder="Initial Amount ($)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-4 border-2 border-green-200 rounded-2xl text-lg"
        />
        <input
          type="number"
          placeholder="Years"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="w-full p-4 border-2 border-green-200 rounded-2xl text-lg"
        />
        <input
          type="number"
          placeholder="Annual Interest Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full p-4 border-2 border-green-200 rounded-2xl text-lg"
        />
        <button onClick={calculate} className="w-full bg-blue-600 text-white px-6 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition">Calculate Returns</button>
      </div>

      {result && (
        <div className="mt-8 bg-green-50 rounded-2xl p-6">
          <h4 className="text-2xl font-semibold text-green-800 text-center">Projected Returns: <span className="text-3xl">${result}</span></h4>
        </div>
      )}
    </div>
  );
};

export default InvestmentCalculator;

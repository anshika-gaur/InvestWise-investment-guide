import React, { useState } from 'react';

const PortfolioTracker = ({ investments, setInvestments }) => {
  const [type, setType] = useState('Stocks');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const addInvestment = () => {
    if (name && amount) {
      const newInvestment = { id: Date.now(), type, name, amount: parseFloat(amount) };
      setInvestments([...investments, newInvestment]);
      setName('');
      setAmount('');
    }
  };

  const removeInvestment = (id) => {
    setInvestments(investments.filter(inv => inv.id !== id));
  };

  const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-green-800">Portfolio Tracker</h3>

      {/* Add Investment Form */}
      <div className="mb-6 space-y-4">
        <select value={type} onChange={(e) => setType(e.target.value)} className="w-full p-3 border-2 border-green-200 rounded-2xl text-lg">
          <option>Stocks</option>
          <option>Bonds</option>
          <option>Mutual Funds</option>
          <option>ETFs</option>
          <option>Crypto</option>
        </select>
        <input
          type="text"
          placeholder="Investment Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border-2 border-green-200 rounded-2xl text-lg"
        />
        <input
          type="number"
          placeholder="Amount ($)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 border-2 border-green-200 rounded-2xl text-lg"
        />
        <button onClick={addInvestment} className="w-full bg-green-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-green-700 transition">Add Investment</button>
      </div>

      {/* Total Invested */}
      <div className="mb-6 bg-blue-50 rounded-2xl p-4">
        <h4 className="text-xl font-semibold text-blue-800">Total Invested: <span className="text-2xl">${totalInvested.toFixed(2)}</span></h4>
      </div>

      {/* Investments List */}
      <ul className="space-y-3">
        {investments.map((inv) => (
          <li key={inv.id} className="flex justify-between items-center bg-gray-50 rounded-2xl p-4">
            <span className="text-lg">{inv.type} - {inv.name}: <span className="font-semibold">${inv.amount}</span></span>
            <button onClick={() => removeInvestment(inv.id)} className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioTracker;

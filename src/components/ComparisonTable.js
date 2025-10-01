import React from 'react';

const ComparisonTable = () => {
  const comparisons = [
    { type: 'Stocks', risk: 'High', returns: 'High', liquidity: 'High', suitability: 'Growth-oriented' },
    { type: 'Bonds', risk: 'Low', returns: 'Moderate', liquidity: 'Moderate', suitability: 'Income-focused' },
    { type: 'Mutual Funds', risk: 'Medium', returns: 'Moderate', liquidity: 'High', suitability: 'Diversified' },
    { type: 'ETFs', risk: 'Medium', returns: 'Moderate', liquidity: 'High', suitability: 'Cost-effective' },
    { type: 'Crypto', risk: 'Very High', returns: 'Very High', liquidity: 'High', suitability: 'Speculative' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-green-100">
            <th className="py-3 px-4 border-b text-left">Investment Type</th>
            <th className="py-3 px-4 border-b text-left">Risk Level</th>
            <th className="py-3 px-4 border-b text-left">Potential Returns</th>
            <th className="py-3 px-4 border-b text-left">Liquidity</th>
            <th className="py-3 px-4 border-b text-left">Best For</th>
          </tr>
        </thead>
        <tbody>
          {comparisons.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b font-semibold">{item.type}</td>
              <td className="py-3 px-4 border-b">{item.risk}</td>
              <td className="py-3 px-4 border-b">{item.returns}</td>
              <td className="py-3 px-4 border-b">{item.liquidity}</td>
              <td className="py-3 px-4 border-b">{item.suitability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;

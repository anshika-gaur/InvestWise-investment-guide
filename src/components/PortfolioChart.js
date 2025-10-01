import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const PortfolioChart = ({ investments }) => {
  // Group by type and sum amounts
  const data = investments.reduce((acc, inv) => {
    const existing = acc.find(item => item.name === inv.type);
    if (existing) {
      existing.value += inv.amount;
    } else {
      acc.push({ name: inv.type, value: inv.amount });
    }
    return acc;
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-blue-800">Portfolio Allocation</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioChart;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const trendsData = [
  { year: '2022', value: 110 },
  { year: '2023', value: 150 },
  { year: '2024', value: 160 },
  { year: '2025', value: 170 },
];

const faqs = [
  { question: 'What are mutual funds?', answer: 'Mutual funds pool money from many investors to buy a diversified portfolio of stocks, bonds, or other securities.' },
  { question: 'How do mutual funds work?', answer: 'Professional fund managers invest the pooled money in various assets according to the fund\'s objectives.' },
  { question: 'What are the fees?', answer: 'Mutual funds charge expense ratios, which are annual fees as a percentage of your investment.' },
  { question: 'Are mutual funds safe?', answer: 'They carry market risk, but diversification reduces individual stock risk.' },
  { question: 'How to invest in mutual funds?', answer: 'Open an account with a broker or fund company, choose funds, and buy shares.' },
];

const MutualFunds = () => {
  return (
    <div className="min-h-screen bg-green-50 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">Mutual Funds for Beginners</h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">What are Mutual Funds?</h2>
          <p className="text-lg mb-6">Mutual funds are like a shared money pot where many people put in their money. Experts then use that money to buy a mix of different investments like business pieces or loans. This way, your money is spread out to lower the chance of losing a lot, and the experts handle everything for you.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Good Things</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Spreading money around lowers the risk</li>
                <li>Experts manage it for you</li>
                <li>Easy to get your money out when needed</li>
                <li>Many different types to choose from</li>
              </ul>
            </div>
            <div className="bg-red-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-2">Not So Good Things</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>You pay fees to the experts</li>
                <li>You can't pick exactly what to buy</li>
                <li>Still some risk from the market</li>
                <li>Sometimes it doesn't do as well as expected</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-green-700 mb-2">How to Start Buying Mutual Funds</h3>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>Think about what you want to achieve and how much risk you can take</li>
              <li>Learn about different kinds of mutual funds</li>
              <li>Open an account with a buying service or fund company</li>
              <li>Pick funds that fit your goals</li>
              <li>Put in money regularly or all at once</li>
            </ol>
          </div>

          <div className="h-64 mb-6">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Mutual Fund Market Trends</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#16a34a" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <h3 className="text-lg font-semibold text-green-800 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MutualFunds;

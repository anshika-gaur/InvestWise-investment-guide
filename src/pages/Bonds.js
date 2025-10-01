import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const trendsData = [
  { year: '2022', value: 102 },
  { year: '2023', value: 108 },
  { year: '2024', value: 110 },
  { year: '2025', value: 115 },
];

const faqs = [
  { question: 'What are bonds?', answer: 'Bonds are like loans you give to big companies or governments. They pay you back with a little extra money and return your loan later.' },
  { question: 'How do bonds work?', answer: 'You buy a bond for a fixed price, get small payments of extra money over time, and get your main money back at the end.' },
  { question: 'Are bonds safe?', answer: 'Bonds are usually safer than buying business pieces, but their value can still go down if borrowing costs increase.' },
  { question: 'What is bond extra money?', answer: 'Bond extra money is the return you get, figured out by dividing the extra payments by the bond price.' },
  { question: 'How to buy bonds?', answer: 'You can buy bonds through buying helpers, straight from the loan makers, or through bond groups.' },
];

const Bonds = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Bonds for Beginners</h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">What are Bonds?</h2>
          <p className="text-lg mb-6">Bonds are like giving money as a loan to a government or big company. They promise to pay you back your money after some time, plus a little extra money each year as thank you. It's safer than stocks but you get less extra money.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Good Things</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Safer than buying business pieces</li>
                <li>Get steady extra money payments</li>
                <li>You know what you'll get back</li>
                <li>Helps mix up your money types</li>
              </ul>
            </div>
            <div className="bg-red-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-2">Not So Good Things</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Less extra money than business pieces</li>
                <li>Prices can drop if interest rates go up</li>
                <li>Money value can shrink over time</li>
                <li>Harder to sell quickly</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">How to Start Buying Bonds</h3>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>Pick government or company bonds</li>
              <li>Make an account with a bank or buying service</li>
              <li>Look up different bonds and how much extra money they give</li>
              <li>Buy the bonds you like</li>
              <li>Keep them until it's time to get your money back</li>
            </ol>
          </div>

          <div className="h-64 mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Bond Market Trends</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bonds;

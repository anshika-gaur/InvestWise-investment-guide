import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const trendsData = [
  { year: '2022', value: 120 },
  { year: '2023', value: 180 },
  { year: '2024', value: 200 },
  { year: '2025', value: 220 },
];

const faqs = [
  { question: 'What are stocks?', answer: 'Stocks are like buying small pieces of a business. When you buy a stock, you own a tiny part of that business.' },
  { question: 'How do I buy stocks?', answer: 'Make an account with a website that sells stocks, put money in, and find the business you want to buy pieces of.' },
  { question: 'What is a stock code?', answer: 'A stock code is a short name made of letters for each business, like APPL for Apple company.' },
  { question: 'Are stocks risky?', answer: 'Yes, the prices can go up and down a lot, but over many years, they usually go up.' },
  { question: 'What is bonus money?', answer: 'Bonus money is extra cash that some businesses give to people who own their pieces from the business profits.' },
];

const Stocks = () => {
  return (
    <div className="min-h-screen bg-green-50 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">Stocks for Beginners</h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">What are Stocks?</h2>
          <p className="text-lg mb-6">Stocks are like buying a small part of a business. When you buy stocks, you own a tiny piece of that business. If the business grows and makes more money, the value of your piece goes up. You can then sell your piece for more money than you paid. Some businesses also share their extra money with owners as bonus payments.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Good Things</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Can make a lot of money if the business does well</li>
                <li>Get extra money payments from the business sometimes</li>
                <li>Easy to buy and sell anytime</li>
                <li>You own part of real businesses</li>
              </ul>
            </div>
            <div className="bg-red-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-2">Not So Good Things</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Prices can change a lot and go down</li>
                <li>You might lose some or all of your money</li>
                <li>Need to learn about the businesses first</li>
                <li>Hard to know the best time to buy or sell</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-green-700 mb-2">How to Start Buying Stocks</h3>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>Create an account with a stock buying website (like a bank for stocks)</li>
              <li>Put money into your account</li>
              <li>Look up businesses you like and learn about them</li>
              <li>Buy pieces of the business you want</li>
              <li>Check on your pieces often to see how they're doing</li>
            </ol>
          </div>
          
          <div className="h-64 mb-6">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Stock Market Trends</h3>
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

export default Stocks;

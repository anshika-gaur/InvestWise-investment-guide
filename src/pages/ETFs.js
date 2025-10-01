import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const trendsData = [
  { year: '2022', value: 115 },
  { year: '2023', value: 160 },
  { year: '2024', value: 170 },
  { year: '2025', value: 180 },
];

const faqs = [
  { question: 'What are ETFs?', answer: 'ETFs are like mutual funds but trade like stocks on the market. They track indexes or groups of assets.' },
  { question: 'How do ETFs work?', answer: 'You buy shares of an ETF, which owns a basket of assets, and the price changes throughout the day.' },
  { question: 'Are ETFs safe?', answer: 'ETFs carry market risk but offer diversification and flexibility.' },
  { question: 'What are the fees?', answer: 'ETFs usually have lower fees than mutual funds.' },
  { question: 'How to buy ETFs?', answer: 'You can buy ETFs through a brokerage account like stocks.' },
];

const ETFs = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">ETFs for Beginners</h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">What are ETFs?</h2>
          <p className="text-lg mb-6">ETFs are investment funds that trade on stock exchanges, much like stocks. They hold a collection of assets like stocks or bonds and offer diversification with the flexibility of stock trading.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Good Things</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Trade like stocks with real-time pricing</li>
                <li>Lower fees than mutual funds</li>
                <li>Diversification across many assets</li>
                <li>Easy to buy and sell</li>
              </ul>
            </div>
            <div className="bg-red-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-2">Not So Good Things</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Market risk like stocks</li>
                <li>Price can fluctuate throughout the day</li>
                <li>Some ETFs can be complex or risky</li>
                <li>May have trading fees</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">How to Start Buying ETFs</h3>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>Open a brokerage account</li>
              <li>Research ETFs that match your goals</li>
              <li>Buy shares through your brokerage</li>
              <li>Monitor your investments regularly</li>
              <li>Consider diversification and risk</li>
            </ol>
          </div>

          <div className="h-64 mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">ETF Market Trends</h3>
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

export default ETFs;

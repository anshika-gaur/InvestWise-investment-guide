import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const trendsData = [
  { year: '2022', value: 250 },
  { year: '2023', value: 400 },
  { year: '2024', value: 450 },
  { year: '2025', value: 500 },
];

const faqs = [
  { question: 'What is cryptocurrency?', answer: 'Cryptocurrency is digital or virtual currency secured by cryptography, operating on decentralized networks based on blockchain technology.' },
  { question: 'How does crypto work?', answer: 'Transactions are verified and recorded on a blockchain, a distributed ledger maintained by a network of computers.' },
  { question: 'Is crypto safe?', answer: 'Crypto is highly volatile and can be risky. Always do your research and never invest more than you can afford to lose.' },
  { question: 'How to buy crypto?', answer: 'Use exchanges like Coinbase or Binance, create an account, verify identity, and buy with fiat currency.' },
  { question: 'What is blockchain?', answer: 'Blockchain is a decentralized, distributed ledger technology that records transactions across many computers securely.' },
];

const Crypto = () => {
  return (
    <div className="min-h-screen bg-green-50 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">Cryptocurrency for Beginners</h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">What is Cryptocurrency?</h2>
          <p className="text-lg mb-6">Cryptocurrency is digital money that is not controlled by any government or bank. It's like online money that uses special codes to keep it safe. Examples are Bitcoin and others. It's new and can change value very quickly.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Good Things</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>No one boss controls it</li>
                <li>Can make a lot of money if it goes up</li>
                <li>Send money quickly anywhere</li>
                <li>New way of handling money</li>
              </ul>
            </div>
            <div className="bg-red-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-2">Not So Good Things</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Prices change a lot and fast</li>
                <li>Laws might change</li>
                <li>Risks of losing money to thieves or tricks</li>
                <li>Uses a lot of electricity for some</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-green-700 mb-2">How to Start Buying Crypto</h3>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>Learn the basics first</li>
              <li>Pick a trusted website to buy it</li>
              <li>Get a safe place to store it</li>
              <li>Start with a little money</li>
              <li>Buy a bit at a time over time</li>
            </ol>
          </div>

          <div className="h-64 mb-6">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Crypto Market Trends</h3>
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

export default Crypto;

import React from 'react';
import { Link } from 'react-router-dom';
import ComparisonTable from '../components/ComparisonTable';

const investmentTypes = [
  {
    name: 'Stocks',
    path: '/stocks',
    color: 'bg-green-100 hover:bg-green-200',
    description: 'Stocks are shares in a company. When you buy a stock, you own a small part of that company. If the company does well, the stock price goes up, and you can sell it for more money. Stocks can give high returns but can also lose value quickly.'
  },
  {
    name: 'Bonds',
    path: '/bonds',
    color: 'bg-blue-100 hover:bg-blue-200',
    description: 'Bonds are like loans you give to companies or governments. They pay you back with interest over time. Bonds are safer than stocks but usually give lower returns. They are good for steady income.'
  },
  {
    name: 'Mutual Funds',
    path: '/mutual-funds',
    color: 'bg-green-100 hover:bg-green-200',
    description: 'Mutual funds pool money from many people to buy a mix of stocks, bonds, and other investments. A professional manager handles it. They are good for beginners as they spread risk and are easier to manage.'
  },
  {
    name: 'ETFs',
    path: '/etfs',
    color: 'bg-blue-100 hover:bg-blue-200',
    description: 'ETFs are like mutual funds but trade like stocks on the market. They track indexes or groups of assets. They are low-cost and flexible, allowing you to buy and sell anytime during market hours.'
  },
  {
    name: 'Crypto',
    path: '/crypto',
    color: 'bg-green-100 hover:bg-green-200',
    description: 'Cryptocurrency is digital money like Bitcoin. It is new and can be very volatile, meaning prices change a lot. It has potential for high gains but also high risks, including loss of all money.'
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-10">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-800 mb-4">Welcome to InvestWise</h1>
          <p className="text-xl text-gray-700 mb-8">Your beginner-friendly guide to understanding and tracking investments.</p>
          <div className="flex justify-center space-x-6">
            <Link to="/calculator" className="bg-green-600 text-white px-8 py-3 rounded-2xl text-lg font-semibold hover:bg-green-700 transition">Try Calculator</Link>
            <Link to="/portfolio" className="bg-blue-600 text-white px-8 py-3 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition">View Portfolio</Link>
          </div>
        </section>

        {/* What are Investments */}
        <section className="bg-white rounded-3xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-6">What are Investments?</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p><strong>What are investments?</strong> Investments are ways to put your money to work so it can grow over time. Instead of keeping money in a savings account earning little interest, you can invest in things like stocks, bonds, or real estate that might increase in value.</p>
            <p><strong>When should you invest?</strong> You should invest when you have extra money after paying for your needs and building an emergency fund. It's best to start early, even with small amounts, because time helps your money grow through compound interest.</p>
            <p><strong>What profits can you get?</strong> Profits come from capital gains (selling an investment for more than you paid) and dividends or interest (regular payments from investments). Returns vary by type – stocks might give 7-10% average yearly, bonds 3-5%, but past performance doesn't guarantee future results.</p>
          </div>
        </section>

        {/* Investment Types Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Explore Investment Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentTypes.map((inv, index) => (
              <Link key={index} to={inv.path} className={`${inv.color} p-8 rounded-3xl shadow-lg transition transform hover:scale-105`}>
                <h3 className="text-2xl font-semibold text-center mb-4">{inv.name}</h3>
                <p className="text-center text-lg">{inv.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12 bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Investment Types Comparison</h2>
          <ComparisonTable />
        </section>

        {/* Quick Tips */}
        <section className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Beginner Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Start Small</h3>
              <p>Begin with small investments to learn without risking too much.</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Diversify</h3>
              <p>Don't put all your eggs in one basket. Spread your investments across different types.</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Educate Yourself</h3>
              <p>Knowledge is power. Read, learn, and stay informed about market trends.</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Long-term Mindset</h3>
              <p>Investing is a marathon, not a sprint. Focus on long-term growth.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

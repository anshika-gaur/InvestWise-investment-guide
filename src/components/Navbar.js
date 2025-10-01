import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">InvestWise</Link>
        <div className="space-x-6 flex flex-wrap">
          <Link to="/" className="hover:underline text-lg">Home</Link>
          <Link to="/stocks" className="hover:underline text-lg">Stocks</Link>
          <Link to="/bonds" className="hover:underline text-lg">Bonds</Link>
          <Link to="/mutual-funds" className="hover:underline text-lg">Mutual Funds</Link>
          <Link to="/etfs" className="hover:underline text-lg">ETFs</Link>
          <Link to="/crypto" className="hover:underline text-lg">Crypto</Link>
          <Link to="/calculator" className="hover:underline text-lg">Calculator</Link>
          <Link to="/portfolio" className="hover:underline text-lg">Portfolio</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

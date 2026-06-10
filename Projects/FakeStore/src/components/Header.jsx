import React from "react";
import { Link } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <LuShoppingBag className="text-2xl" />
            <span className="text-2xl font-bold">FakeStore</span>
          </Link>

          <nav className="flex items-center gap-6 text-sm sm:text-base font-medium">
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
            <Link to="/products" className="hover:text-yellow-400 transition">
              Products
            </Link>
            <Link to="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
            <Link to="/about" className="hover:text-yellow-400 transition">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
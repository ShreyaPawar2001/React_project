import React from 'react';
import { Link } from '@tanstack/react-router';
import { Plane } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">TRAVITI</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/press-release" className="text-gray-600 hover:text-blue-600">Press Release</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
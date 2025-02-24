import React from 'react';
import { Link } from '@tanstack/react-router';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f9f8f5] text-black">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="border border-gray-700 rounded-lg p-6 md:ml-auto">
            <h3 className=" text-red-500 text-xl font-bold mb-4">TRAVITI</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Instagram /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin /></a>
              <a href="#" className="hover:text-blue-400"><Youtube /></a>
            </div>
          </div>
          <div className="flex-1 border border-gray-700 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="hover:text-blue-400">Subscription</Link></li>
                  <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
                  <li><Link to="/careers" className="hover:text-blue-400">Careers</Link></li>
                  <li><Link to="/press-release" className="hover:text-blue-400">Press</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">What's New</h3>
                <ul className="space-y-2">
                  <li><Link to="/stories" className="hover:text-blue-400">Stories</Link></li>
                  <li><Link to="/support" className="hover:text-blue-400">Support</Link></li>
                  <li><Link to="/business" className="hover:text-blue-400">Business</Link></li>
                  <li><Link to="/partner" className="hover:text-blue-400">Partner Center</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link to="/privacy" className="hover:text-blue-400">Privacy</Link></li>
                  <li><Link to="/terms" className="hover:text-blue-400">Terms</Link></li>
                  <li><Link to="/gdpr" className="hover:text-blue-400">Do Not Share My Information</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
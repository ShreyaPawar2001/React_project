import React from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[600px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="Beautiful landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 typing-animation">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl mb-8">Explore the world's most beautiful destinations</p>
            <Link to="/signup" className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-700">
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
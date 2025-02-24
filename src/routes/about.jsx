import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">About Traviti</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              alt="Travel experience"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2020, Traviti has been at the forefront of transforming how people experience travel. 
              We believe that every journey should be more than just a trip—it should be a story worth telling.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to connect travelers with authentic experiences, hidden gems, and local cultures 
              across the globe. We work with passionate local experts and utilize cutting-edge technology to 
              create seamless, unforgettable travel experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
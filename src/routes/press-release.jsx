import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/press-release')({
  component: PressReleasePage,
});

function PressReleasePage() {
  const pressReleases = [
    {
      date: 'March 15, 2024',
      title: 'Traviti Launches Sustainable Travel Initiative',
      content: 'Traviti announces a new program focused on promoting sustainable tourism practices...',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Add image URL
    },
    {
      date: 'February 1, 2024',
      title: 'Record Growth in Q4 2023',
      content: 'Traviti reports exceptional growth in the fourth quarter of 2023...',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Add image URL
    },
    {
      date: 'December 10, 2023',
      title: 'New Partnership with Local Communities',
      content: 'Traviti forms strategic partnerships with local communities to enhance travel experiences...',
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Add image URL
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Press Releases</h1>
        <div className="space-y-8">
          {pressReleases.map((release, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in" // Add animation
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image Section */}
                <div className="w-full md:w-1/3">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                {/* Content Section */}
                <div className="w-full md:w-2/3">
                  <div className="text-sm text-gray-500 mb-2">{release.date}</div>
                  <h2 className="text-2xl font-semibold mb-4">{release.title}</h2>
                  <p className="text-gray-600">{release.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
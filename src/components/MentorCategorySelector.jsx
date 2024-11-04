
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Financial Service', mentors: 182, image: '/api/placeholder/400/300' },
  { name: 'Human Resources', mentors: 702, image: '/api/placeholder/400/300' },
  { name: 'Arts/Creative', mentors: 36, image: '/api/placeholder/400/300' },
  { name: 'Health', mentors: 90, image: '/api/placeholder/400/300' },
];

const MentorCategorySelector = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex(prev => Math.min(categories.length - 3, prev + 1));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Choose a mentor category</h1>
      <div className="relative">
        <div className="flex space-x-4 overflow-hidden">
          {categories.slice(startIndex, startIndex + 3).map((category, index) => (
            <div key={index} className="w-1/3 flex-shrink-0">
              <img src={category.image} alt={category.name} className="w-full h-48 object-cover rounded-lg mb-2" />
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.mentors} mentors available</p>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex >= categories.length - 3}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default MentorCategorySelector;

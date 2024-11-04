
import React from 'react';
import { ArrowRight } from 'lucide-react';

const MentorshipCard = ({ title, subtitle, imageSrc }) => (
  <div className="flex flex-col items-start p-4 border rounded-lg shadow-md max-w-sm">
    <div className="w-full h-40 bg-gray-200 rounded-lg mb-4">
      <img 
        src={imageSrc} 
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="flex items-center justify-between w-full">
      <div>
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
      <ArrowRight className="text-gray-400" />
    </div>
  </div>
);

const MentorshipOptions = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <MentorshipCard 
        title="Find a mentor"
        subtitle="Register now"
        imageSrc="/api/placeholder/400/320"
      />
      <MentorshipCard 
        title="Become a mentor"
        subtitle="Get Started"
        imageSrc="/api/placeholder/400/320"
      />
    </div>
  );
};

export default MentorshipOptions;

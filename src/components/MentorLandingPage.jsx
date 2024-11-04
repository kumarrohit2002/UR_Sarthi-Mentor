import React from 'react';
import { Search } from 'lucide-react';
import Navbar from './Navbar';

const MentorLandingPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-gray-800 font-sans">
      
    <Navbar/>
      <main className="max-w-4xl mx-auto mt-16 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Everyone needs a <span className="text-blue-500">Mentor</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Search amazing individuals around the globe, find a mentor, expand your network, and learn from incredible people!
        </p>
        <div className="flex justify-center mb-4">
          <select className="p-2 border rounded-l-md">
            <option>Education</option>
          </select>
          <input type="text" placeholder="Search Mentor" className="p-2 border-t border-b w-64" />
          <button className="bg-blue-500 text-white p-2 rounded-r-md">
            <Search size={24} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-8">Tip: Search by skills, interest, location, name etc</p>
        <a href="#" className="text-blue-500 hover:underline">Browse all Mentors →</a>
      </main>

      {/* Placeholder for profile images */}
      {/* <div cl`assName="fixed top-1/4 left-1/4 w-8 h-8 rounded-full bg-gray-300"></div>
      <div className="fixed top-1/3 right-1/4 w-8 h-8 rounded-full bg-gray-300"></div>
      <div className="fixed bottom-1/4 left-1/3 w-8 h-8 rounded-full bg-gray-300"></div>
      <div className="`fixed bottom-1/3 right-1/3 w-8 h-8 rounded-full bg-gray-300"></div> */}
    </div>
  );
};

export default MentorLandingPage;

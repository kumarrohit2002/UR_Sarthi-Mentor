import { Users } from 'lucide-react';

const MentorshipPlatform = () => {
  return (
    <div className="font-sans">
      <div className="bg-[#0F172A] p-8 rounded-lg relative">
        <div className="max-w-3xl mx-auto text-center relative">
          {/* <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 left-4">
              <img src="/api/placeholder/40/40" alt="Mentor 1" className="rounded-full" />
            </div>
            <div className="absolute top-1/4 right-4">
              <img src="/api/placeholder/40/40" alt="Mentor 2" className="rounded-full" />
            </div>
            <div className="absolute bottom-4 left-1/4">
              <img src="/api/placeholder/40/40" alt="Mentor 3" className="rounded-full" />
            </div>
            <div className="absolute top-1/2 right-1/4">
              <img src="/api/placeholder/40/40" alt="Mentor 4" className="rounded-full" />
            </div>
          </div> */}
          
          <h1 className="text-4xl font-bold mb-4 text-white">Explore 4000+ mentors from 60+ countries</h1>
          <p className="text-xl mb-6 text-white">to help you achieve and overcome any challenges you face.</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors">
            BROWSE ALL MENTORS
          </button>
          
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-8xl text-cyan-100 opacity-20">
            {/* <Users /> */}
          </div>
        </div>
      </div>
      
      <footer className="mt-16 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h2 className="text-blue-500 text-2xl font-bold mb-4">mentoree</h2>
            <p className="text-gray-600">Search amazing individuals around the globe, find a mentor, expand your network, and learn from incredible people!</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Quick links</h3>
            <ul className="text-gray-600">
              <li>Browse Mentors</li>
              <li>Mentor Registrations</li>
              <li>Mentee Registrations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">About</h3>
            <ul className="text-gray-600">
              <li>About us</li>
              <li>Mission</li>
              <li>Terms & Conditions</li>
              <li>Contact</li>
              <li>Mentoree Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Social</h3>
            <ul className="text-gray-600">
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Youtube</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MentorshipPlatform;
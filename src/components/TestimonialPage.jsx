import  { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const testimonials = [
  {
    name: "Leslie Alexander",
    role: "Student, University of Toronto",
    content: "Have a great time talking with Menghan. I've learned a lot about UX Design process and gained feedback about my portfolio. Avatar of undefined",
    avatar: "/api/placeholder/32/32"
  },
  {
    name: "Floyd Miles",
    role: "Student, University of Toronto",
    content: "Very welcoming and easy going. I found him extremely helpful in his field and also provides insights only passionate with many years...",
    avatar: "/api/placeholder/32/32"
  },
  {
    name: "Eleanor Pena",
    role: "Student, University of Toronto",
    content: "I'm super grateful for the tips Sakshi shared with me and for sure I'll apply those tips. Thank you for being helpful to me. Thank you!",
    avatar: "/api/placeholder/32/32"
  },
  {
    name: "Annette Black",
    role: "Student, University of Toronto",
    content: "Bethany was friendly, she saw my portfolio and discussed the interview questions. She asked me to make grammatical...",
    avatar: "/api/placeholder/32/32"
  }
];

const TestimonialPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className=" max-w-4xl mx-auto p-6 mt-[-200px]">
      <div className="text-center mb-8">
        <Heart className="text-red-500 mx-auto mb-4" size={32} />
        <h1 className="text-3xl font-bold mb-2 text-[white]">Don't just take our word for it!</h1>
        <p className="text-white">Hear what the community is saying about us</p>
      </div>

      <div className="bg-[#0F172A] shadow-lg rounded-lg p-6 mb-6">
        <p className="text-lg mb-4 text-white">{testimonials[currentIndex].content}</p>
        <div className="flex items-center">
          <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="font-semibold text-white">{testimonials[currentIndex].name}</h3>
            <p className="text-white">{testimonials[currentIndex].role}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button onClick={prevTestimonial} className="mr-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextTestimonial} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialPage;
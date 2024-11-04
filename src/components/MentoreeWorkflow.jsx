import React from 'react';
import { UserPlus, Search, UserCheck } from 'lucide-react';

const WorkflowStep = ({ title, description, buttonText, icon: Icon }) => (
  <div className="flex flex-col items-center p-4 bg-[#0F172A] rounded-lg text-white">
    <Icon className="w-12 h-12 mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-center mb-4">{description}</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      {buttonText}
    </button>
  </div>
);

const MentoreeWorkflow = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">How Mentoree works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <WorkflowStep
          title="1. Create your profile"
          description="It won't take 5 min to put your information and get started."
          buttonText="GET STARTED"
          icon={UserPlus}
        />
        <WorkflowStep
          title="2. Search Mentor"
          description="From recommendations, search, or referral and then book a time to meet."
          buttonText="SEARCH"
          icon={Search}
        />
        <WorkflowStep
          title="3. Make a connection"
          description="With someone who could change your life"
          buttonText="SEE TESTIMONIALS"
          icon={UserCheck}
        />
      </div>
    </div>
  );
};

export default MentoreeWorkflow;
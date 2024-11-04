
import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-2 text-white">
      <button
        className="flex justify-between w-full p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="p-4 bg-blue-500 text-white ">{answer}</div>}
    </div>
  );
};

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState('General');
  const tabs = ['General', 'For Mentees', 'For Mentors'];

  const faqs = [
    {
      question: 'What do I need to apply for the account?',
      answer: 'Answer details would go here.'
    },
    {
      question: 'How the subscription process works?',
      answer: 'We built Mentoree for people who seek life changing relationships. We\'ve seen the impact that people have had in our own lives and wanted to create a platform to help others make meaningful connections and increase human happiness.\n\n"Seek and you will find, ask and you shall receive, knock and the door will be opened for you"'
    },
    {
      question: 'Can I send money from anywhere in the world?',
      answer: 'Answer details would go here.'
    },
    {
      question: 'Is there any hidden fee included?',
      answer: 'Answer details would go here.'
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
      <div className="flex space-x-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab
                ? 'bg-blue-500 text-white'
                : 'border border-blue-500 text-blue-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

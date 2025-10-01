import React, { useState } from 'react';

const faqs = [
  { question: 'What is investing?', answer: 'Investing is putting money into assets like stocks or bonds to generate returns over time.' },
  { question: 'How do I start investing?', answer: 'Start by educating yourself, setting goals, and opening an investment account.' },
  { question: 'What is risk?', answer: 'Risk is the chance of losing money on an investment.' },
  { question: 'What are dividends?', answer: 'Dividends are payments made by companies to shareholders from profits.' },
  { question: 'What is diversification?', answer: 'Diversification means spreading investments across different assets to reduce risk.' },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4">
      <h3 className="text-xl font-bold mb-4 text-blue-600">FAQs & Glossary</h3>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full text-left py-4 px-2 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">{faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
          </button>
          {activeIndex === index && (
            <div className="px-2 pb-4">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;

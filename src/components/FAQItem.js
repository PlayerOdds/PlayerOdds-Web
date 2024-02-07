import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <button
          className="flex justify-between items-center w-full text-left text-lg font-semibold py-2 px-4 bg-gray-100 hover:bg-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
          <span className="text-xl">{isOpen ? '−' : '+'}</span>
        </button>
        {isOpen && (
          <div className="px-4 py-2 text-gray-700 bg-white">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQItem;
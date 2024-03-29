import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 bg-[#141c22]" >
      <div className="shadow-md bg-[#141c22] rounded-lg overflow-hidden">
        <button
          className="flex justify-between items-center w-full text-left text-lg font-semibold py-2 px-4 bg-[gray-100] text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
          <span className="text-xl">{isOpen ? '−' : '+'}</span>
        </button>
        {isOpen && (
          <div className="px-4 py-2 text-white bg-[#141c22]">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQItem;
import React from 'react';
import FAQItem from './FAQItem'; // Make sure this path matches the location of your FAQItem component

const FAQ = () => {
  const faqs = [
    {
      question: "What does the DFS Optimizer do for me?",
      answer: "The DFS Optimizer finds the best value, sourced from multiple books and provides with you with undervalued lines from all the markets."
    },
    {
      question: "What is +EV Betting? ",
      answer: "Postive Expected Value or +EV Betting is where according to the market that bet is undervalued and has more potential to make profit!"
    },
    // Add more FAQs here
  ];

  return (
    <div className="max-w-4xl mx-auto my-10 p-5 bg-[#141c22] rounded-lg shadow">
      <h1 className="text-5xl font-bold mb-10 text-[#17D475] text-center">FAQ</h1>
      <div className="divide-y  divide-gray-200">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
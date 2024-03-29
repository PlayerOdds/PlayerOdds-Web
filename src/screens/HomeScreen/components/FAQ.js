import React from 'react';
import FAQItem from './FAQItem'; 

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
    {
      question: "How Will I Access The Server? ",
      answer: `Once you place your purchase you will automatically receive the "VIP MEMBER" role in discord and all the premium channels will unlock. You will be given an invite link to join. If you cancel your membership these channels will disappear.`
    },
    {
      question: "Why can't I see the premium chat? ",
      answer: "Make sure you have your discord connected to Whop and you properly claim your roles after purchasing. You can find a confirmation email with the option to claim your role. "
    },
    {
      question: "What type of sports betting does the group focus on? ",
      answer: "We will primarily focus around Daily Fantasy Sports for the time being. "
    },
    // Add more FAQs here
  ];

  return (
    <div className="max-w-4xl mx-auto my-10 p-5 bg-[#141c22] rounded-lg shadow">
      <h1 className="text-5xl font-bold mb-10 text-[#17D475] text-center">FAQ</h1>
      <div className="divide divide-gray-200">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
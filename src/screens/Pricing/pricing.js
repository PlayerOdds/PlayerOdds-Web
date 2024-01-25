import React from "react";
import {CheckMark} from '../../images/ImageRepository'
 
const pricingPlans = [
    {
        plan: "Monthly",
        price: 100,
        includes: [
            "Access to Discord Server",
            "DFS Optimizer",
        ],
    },
    {
        plan: "Semi-Annual",
        price: 550,
        includes: [
            "Access to Discord Server",
            "DFS Optimizer",
            "Access to Premium Discord",
        ],
    },
    {
        plan: "Annual",
        price: 1000,
        includes: [
            "Access to Discord Server",
            "DFS Optimizer",
            "Access to Premium Discord",
            "My Personal Picks 2x / Week",
        ],
    },
];

const Pricing = () => {
    const getPricingPeriod = (plan) => {
        switch(plan) {
            case "Monthly":
                return "/ month";
            case "Semi-Annual":
                return "/ 6 Months";
            case "Annual":
                return "/ Year";
            default:
                return "";
        }
    };

    const getAdditionalText = (plan) => {
        if (plan === "Semi-Annual") {
            return "Save $50!"; 
        } else if (plan === "Annual") {
            return "Save $200!"; 
        }
        return "";
    };

    return (
        <div className="md:px-5 p-4 pt-8 max-w-screen-2xl mx-auto">
            <div className='flex flex-col items-center justify-center'>
                <h2 className='pt-5 pb-9 text-7xl font-bold text-white'>
                    Pricing Plans
                </h2>
                <p className='text-gray-300 pb-16'>
                    Stop relying on your instinct. Start earning with our reliable, tested tools.
                </p>

                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10'>
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className='bg-[#31333f] rounded-[35px] shadow-2xl p-8 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-4 cursor-pointer'>
                            <div>
                                <h3 className='text-[#17D475] text-xl font-bold mb-4 self-start'>{plan.plan}</h3>
                                <div className="text-white mb-2 self-start">
                                    <span className="text-6xl font-bold">${plan.price}</span>
                                    <span className="text-lg font-normal"> {getPricingPeriod(plan.plan)}</span>
                                    <div className="pt-2 text-gray-300 text-s">
                                        {getAdditionalText(plan.plan)}
                                    </div>
                                </div>
                                {plan.includes.map((include, includeIndex) => (
                                    <div key={includeIndex} className="text-white text-lg mb-2 self-start flex items-center">
                                        <img src={CheckMark} alt="Check Mark" className="mr-2" style={{ width: '20px', height: '20px' }} />
                                        {include}
                                    </div>
                                ))}
                            </div>
                            <button className="mt-4 bg-[#17D475] text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">
                                Purchase
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pricing;

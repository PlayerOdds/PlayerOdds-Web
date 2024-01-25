import React from "react";

const pricingPlans = [
    {
        plan: "Monthly",
        price: 100,
        includes: [
            "Unlimited Blow Outs",
            "2 Men's Haircuts",
            "1 Women's Specialty Cut",
            "10% off on Color Services",
            // ... more services for Monthly plan
        ],
    },
    {
        plan: "Semi-Annual",
        price: 550,
        includes: [
            "Unlimited Blow Outs and Men's Haircuts",
            "4 Women's Specialty Cuts",
            "20% off on Color Services",
            "1 Free Global Blonding Service",
            // ... more services for Semi-Annual plan
        ],
    },
    {
        plan: "Annual",
        price: 1000,
        includes: [
            "Unlimited Haircuts and Blow Outs",
            "Unlimited Women's Specialty Cuts",
            "30% off on Color Services",
            "2 Free Global Blonding Services",
            // ... more services for Annual plan
        ],
    },
    // Add more plans if needed
];

const Pricing = () => {
    return (
        <div className="md:px-5 p-4 pt-36 max-w-screen-2xl mx-auto">
            <div className='flex flex-col items-center justify-center'>
                <h2 className='pt-5 pb-2 text-7xl font-bold text-white'>
                    Pricing Plans
                </h2>

                {/* Pricing Cards */}
                <div className='w-full flex flex-wrap justify-center gap-10 pt-10'>
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className='bg-[#31333f] rounded-[35px] shadow-2xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-4 cursor-pointer' style={{ minWidth: '300px' }}>
                            <h3 className='text-[#17D475] text-xl font-bold mb-4'>{plan.plan}</h3>
                            <div className="text-white text-lg mb-2">
                                ${plan.price}
                            </div>
                            {plan.includes.map((include, includeIndex) => (
                                <div key={includeIndex} className="text-white text-lg mb-2">
                                    {include}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pricing;
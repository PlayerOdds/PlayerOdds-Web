import React from 'react';
import Clock from '../images/content/clock-img.png';
import Bookie from '../images/content/books.png';
import Data from '../images/content/datapoint.png';

const AboutScreen = () => {
    return (
        <div className='md:px-5 p-4 pt-9 max-w-screen-2xl mx-auto mt-100'>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
                {/* Left Section */}
                <div className="lg:w-1/3 pl-10 text-center lg:text-left">
                    <h2 className='text-white pt-10 pb-2 text-4xl font-bold text-custom-darkpurple'>What makes OddsAlert Great?</h2>
                    <p className='text-zinc-300 pt-10 text-xl font-semibold'>OddsAlert utilizes Mathematical Algorithms to compare props of many different books to advise you on what Props you should select.</p>
                </div>

                {/* Client Cards */}
                <div className='w-full lg:w-3/4'>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center md:gap-12 gap-8'>
                        {/* Each card is a flex container */}
                        <div className='bg-blue rounded-[35px] h-100 shadow-2xl p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-4 cursor-pointer md:mt-16'>
                            <img src={Clock} className='object-scale-down h-32 w-32 mb-4' alt=''/>
                            <h3 className='text-white text-xl font-semibold px-5 py-2 text-center mb-4'>Provides Real-Time Odds</h3>
                            <p className='text-zinc-300 text-center'>Always receiving real-time changes and updating the odds accordingly to give you an accurate experience.</p>
                        </div>

                        <div className='rounded-[35px] h-100 shadow-2xl p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-4 cursor-pointer md:mt-16'>
                            <img src={Bookie} className='object-scale-down h-32 w-32 mb-4' alt=''/>
                            <h3 className='text-white text-xl font-semibold px-5 py-2 text-center mb-4'>Sourced from Multiple Books</h3>
                            <p className='text-zinc-300 text-center'>Collecting the odds from books such as Draft Kings, Fanduel, BetMGM, Barstool, Prize Picks, and so many more!</p>
                        </div>

                        <div className='bg-blue rounded-[35px] h-100 shadow-2xl p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-4 cursor-pointer md:mt-16'>
                            <img src={Data} className='object-scale-down h-32 w-32 mb-4' alt=''/>
                            <h3 className='text-white text-xl font-semibold px-5 py-2 text-center mb-4'>Consistently Perfecting the Model</h3>
                            <p className='text-zinc-300 text-center'>The Optimizer is constantly being worked on to guarantee the best possible bets to place.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );        
}

export default AboutScreen;
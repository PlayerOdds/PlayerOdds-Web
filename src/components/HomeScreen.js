import React, { useState, useEffect } from "react";
import Pat from '../images/content/hurt_pat.png'



const HomeScreen = () => {
    return (
        <div className='bg-md:px-5 p-4 max-w-screen-2xl mx-auto mt-100'>
            <div>
                <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                    {/* Container for Heading and Paragraph */}
                    <div className='md:w-3/5 flex flex-col justify-center'>
                        {/* Heading */}
                        <h2 className='text-center text-2xl md:text-6xl font-bold text-white mb-6 leading-tight md:leading-normal'>
                            Giving you the <span className='text-[#17D475]'>Beneficial Edge.</span>
                        </h2>
                        {/* Paragraph */}
                        <p className='text-center text-zinc-300 text-lg md:text-2xl mb-8 leading-tight md:leading-normal'>
                            Odds calculated and Provided straight to you.
                        </p>
                    </div>

                    {/* Image Container */}
                    <div>
                        <img src={Pat} alt='Pat&Jalen' className='object-cover h-90 w-92'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;
import React from 'react';
import {BetMGMBanner, FanDuelBanner, BarStoolSports, PrizePicksBanner, PinicalBanner, CaesarsBanner,BetRiversBanner  } from '../../../images/ImageRepository';



const images = [FanDuelBanner, BetMGMBanner, BarStoolSports, PrizePicksBanner, PinicalBanner, CaesarsBanner, BetRiversBanner];
const doubledImages = [...images, ...images]; 

const ScrollBar = () => {
    return (
        <div className='mx-auto flex flex-col justify-center max-w-full pt-32'>
            <div className='overflow-hidden'>
                <ul className='flex animate-scroll'>
                    {doubledImages.map((image, index) => (
                        <li key={index} className='flex-shrink-0 mx-2 custom-image-container'>
                            <img src={image} alt={`Image ${index}`} />
                        </li>
                    ))}
                </ul>
            </div>                
        </div>
    );        
}

export default ScrollBar;
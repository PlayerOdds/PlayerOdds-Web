import React from 'react';
import FanDuel from '../../images/content/Fanduel_banner.png';
import Bookie from '../../images/content/betmgm-banner.png';
import Data from '../../images/content/Barstool-Sports-Logo.png';
import PrizePicks from '../../images/content/prizepicks-banner.png';
import Pinnacle  from '../../images/content/pinnacle-banner.webp';
import Caesars  from '../../images/content/caesars-banner.png';
import BetRivers  from '../../images/content/betrivers-banner.webp';

const images = [FanDuel, Bookie, Data, PrizePicks, Pinnacle, Caesars, BetRivers];
const doubledImages = [...images, ...images]; // Double The content so that it stops cutting out. Needs cleaning.

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
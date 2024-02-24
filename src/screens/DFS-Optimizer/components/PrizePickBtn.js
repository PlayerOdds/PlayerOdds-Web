import React from 'react';
import { PrizPicksLogo } from '../../../images/ImageRepository';

const PrizePickBtn = () => {
    return (
        <div>
             <button className="flex items-center bg-blue-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-150 ease-in-out">
                <img src={PrizPicksLogo} alt="Icon" className="w-6 h-6 mr-2"/>
                    Prize Picks
            </button>
        </div>
    );        
}

export default PrizePickBtn;
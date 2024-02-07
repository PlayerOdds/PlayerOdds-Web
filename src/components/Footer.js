import React from 'react';
import TwitterButton from './twitterButton'; // Ensure this import path matches the location of your TwitterButton component
import OddsLogo from '../images/content/OddsLogo.png'

const twitterUrl = "https://twitter.com/OddsAlert_";

const Footer = () => {
    return (
        <footer className='relative w-full px-3 py-4 pt-24 bg-transparent overflow-hidden' style={{ minHeight: '100px' }}>
            <div className='flex justify-between items-center px-3 py-1 md:px-3 bg-transparent'>
                <div className="flex items-center absolute left-0 pb-2 pl-2">
                    <img src={OddsLogo} alt="OddsLogo" className="max-w-xs max-h-20 mr-2"/>
                    <p className="text-white">All Rights Reserved</p>

                </div>
            </div>
            
            <div className="absolute bottom-0 right-0 pb-2 pr-2">
                {/* Replace the img tag with TwitterButton component */}
                <TwitterButton twitterUrl={twitterUrl} />
            </div>
        </footer>
    );
};

export default Footer;

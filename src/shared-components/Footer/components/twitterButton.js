import React from 'react';
import { XIcon } from '../../../images/ImageRepository';

const TwitterButton = ({ twitterUrl }) => {
    return (
        <button
            onClick={() => window.open(twitterUrl, "_blank")}
            className="bg-transparent p-3 border-none rounded-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            style={{ backgroundImage: `url(${XIcon})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        >
        </button>
    );
}

export default TwitterButton;
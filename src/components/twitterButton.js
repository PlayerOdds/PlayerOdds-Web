import styled from 'styled-components';
import twitterLogo from '../images/content/twitter.png'; // Path to your Twitter logo image

const StyledTwitterButton = styled.button`
    background-image: url(${twitterLogo});
    background-color: transparent; // Make background transparent
    background-size: cover; // Cover the entire area of the button
    background-repeat: no-repeat;
    background-position: center;
    padding: 12px 12px; // Size of the IMage
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1); // Slightly enlarge button on hover for effect
        
    }

    @media (max-width: 852px) {
        flex-direction: row; // Keep it row to have items side by side
       
    }
`;

const TwitterButton = ({ twitterUrl }) => {
    return (
        <StyledTwitterButton onClick={() => window.open(twitterUrl, "_blank")}>
        </StyledTwitterButton>
    );
}

export default TwitterButton;
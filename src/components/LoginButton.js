import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

// Create a styled button that inherits styles from NavLink
const StyledLoginButton = styled.button`
    background-color: #17D475; // Green background
    color: #000000; 
    padding: 10px 20px; // Padding to create a box shape
    border: none; // No border
    border-radius: 5px; // Rounded corners
    font-size: 15px; // Adjust font size as needed
    cursor: pointer; // Pointer cursor on hover
    transition: background-color 0.3s ease; // Smooth transition for background color

    &:hover {
        background-color: #8bf380; // Darker green on hover
        
    }
`;

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <StyledLoginButton onClick={() => loginWithRedirect()}>
                Sign In
            </StyledLoginButton>
        )        
    );
}

export default LoginButton;
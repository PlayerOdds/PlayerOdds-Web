import { useAuth0 } from '@auth0/auth0-react';

// Create a styled button that inherits styles from NavLink
const TWLoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()} class='transition btn bg-[#03FD91] hover:scale-110 hover:bg-[#17D475] 
            text-black py-1 px-4 mr-3 md:ml-8 rounded md:static'>
                Get Started
            </button>
        )        
    );
}

export default TWLoginButton;
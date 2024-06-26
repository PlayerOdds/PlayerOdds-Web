import { useAuth0 } from '@auth0/auth0-react';

const TWLoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()} className='transition btn bg-[#03FD91] hover:scale-110 hover:bg-[#17D475] 
            text-black py-1 px-4 mr-3 md:ml-8 rounded md:static'>
                Get Started
            </button>
        )        
    );
}

export default TWLoginButton;
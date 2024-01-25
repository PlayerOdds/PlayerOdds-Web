import { useAuth0} from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();


    return (
        isAuthenticated && (
        <button className='text-white font-semibold hover:scale-105 hover:text-[#f06060] py-1 px-4 mr-3 md:ml-8'onClick={ () => logout()}>
            Sign out
        </button>
        )
        
    )
}

export default LogoutButton
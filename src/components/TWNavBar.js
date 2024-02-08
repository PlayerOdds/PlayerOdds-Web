import React, { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import LogoBanner from '../images/content/oddsalert_banner1_transparent.png';
import MenuIcon from '../images/content/main-menu.png';
import ExitIcon from '../images/content/close.png';
import TWLoginButton from "./TWLoginButton";
import LogoutButton from "./LogoutButton";
import { Link } from 'react-router-dom';

const TWNavBar = () => {
    const Links = [
        {name: 'Player Analysis', link: '/Player-Analysis'},
        { name: 'DFS Optimizer', link: '/DFS' },
        { name: 'Pricing', link: '/pricing' },
        /** { name: 'Contact', link: '/contact' }, */
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const { isAuthenticated, isLoading, error } = useAuth0();

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isLoading) {
        return <p>Loading...</p>; 
    }

    if (error) {
        return <p>Authentication Error</p>; 
    }

    return (
        <header className='bg-transparent overflow-hidden w-full top-0 left-0 mb-10 z-50'>
            <div className='md:px-3 py-1 px-3 md:flex justify-between items-center bg-transparent'>
                <div className='flex text-2xl cursor-pointer items-center gap-2'>
                    <Link to="/">
                        <img src={LogoBanner} alt='OddsAlert' className='transition object-scale-down h-20 w-auto hover:scale-105' />
                    </Link>
                </div>

                <div onClick={() => setIsOpen(!isOpen)} className='w-5 h-5 absolute right-8 top-8 cursor-pointer md:hidden'>
                    {isOpen ? <img src={ExitIcon} alt='ExitIcon' /> : <img src={MenuIcon} alt='MenuIcon' />}
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 md:static ${isOpen ? 'block' : 'hidden'} bg-transparent text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9`}>
                    {Links.map(link => (
                        <li key={link.name} className='transition font-semibold my-7 md:my-0 md:ml-8 mr-4 hover:scale-105 hover:text-[#17D475]'>
                            <Link to={link.link}>{link.name}</Link>
                        </li>
                    ))}
                    {isAuthenticated ? <LogoutButton /> : <TWLoginButton />}
                </ul>
            </div>
        </header>
    );
};

export default TWNavBar;
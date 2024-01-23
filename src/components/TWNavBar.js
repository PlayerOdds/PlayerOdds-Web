import React, { useState, useEffect } from "react";
import LogoBanner from '../images/content/oddsalert_banner1_transparent.png';
import MenuIcon from '../images/content/main-menu.png';
import ExitIcon from '../images/content/close.png';
import TWLoginButton from "./TWLoginButton";


const TWNavBar = () => {
    let Links=[
        {name:'DFS Optimizer',link:'/'},
        {name:'Pricing',link:'/'},
        {name:'Contact',link:'/'},
    ]

    let [isOpen, setisOpen] = useState(false);
    let [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className='bg-transparent sticky  w-full fixed top-0 left-0 mb-10'>
            <div className='md:px-3 py-1 px-3 md:flex justify-between items-center
            bg-transparent '>
                <div class='flex text-2xl cursor-pointer items-center gap-2'>
                    <img src={LogoBanner} alt ='OddsAlert' className='transiton object-scale-down h-20 w-auto hover:scale-105'/>
                </div>
                
                <div onClick={() => setisOpen(!isOpen)} className='w-5 h-5 absolute right-8 top-8 cursor-pointer md:hidden'>
                    {
                        isOpen ? <img src ={ExitIcon}  alt ='ExitIcon'/> : <img src ={MenuIcon}  alt ='MenuIcon'/>
                    }
                </div>
                
                {/* Nav Links add drop down Animation if you want*/}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static 
                bg-transparent text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
                translate-all ${isOpen && windowWidth < 768? 'top-15 shadow-md bg-dg-gradient ': 'top-[-490px]'}
                `}>
                    {/** Need to find a Solution for the drop down menu if this design is awesome enough */}
                    {
                        Links.map(link => (
                        <li className='transition font-semibold my-7 md:my-0 md:ml-8 mr-4 hover:scale-105 hover:text-[#17D475]'>
                            <a href='/'>{link.name}</a>
                        </li>))
                    }
                    <TWLoginButton/>
                </ul>
            </div>
        </header>
        
    );
};
export default TWNavBar;
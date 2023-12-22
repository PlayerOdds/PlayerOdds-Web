import React from 'react';
import styled from 'styled-components';
import logoImage from '../images/content/Playerodds_banner.jpg';

const Navbar = styled.nav`
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 64px;
`;

const NavLinks = styled.ul`
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
`;

const NavItem = styled.li`
    font-size: 20px;
    padding: 12px 16px;
    border-radius: 5px;
`;

const NavLink = styled.a`
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
    padding: 4px 16px;
    position: relative;
    overflow: hidden;
    font-size: 18px;
    border-radius: 5px; // Adjust for roundness of each nav link

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: white;
        transition: width 0.3s ease;
    }

    &:hover:after {
        width: 100%;
    }
`;

const Logo = styled.img`
    height: 50px;
    margin-right: 10px;
`;

const NavBar = () => {
    return (
        <Navbar>
            <Logo src={logoImage} alt="Logo" />
            <NavLinks>
                <NavItem><NavLink href="/">Home</NavLink></NavItem>
                <NavItem><NavLink href="/about">About</NavLink></NavItem>
                <NavItem><NavLink href="/services">Services</NavLink></NavItem>
                <NavItem><NavLink href="/contact">Contact</NavLink></NavItem>
            </NavLinks>
        </Navbar>
    );
};

export default NavBar;

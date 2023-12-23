import React from 'react';
import styled from 'styled-components';
import logoImage from '../images/content/oddsalert_banner1.jpg';

const Navbar = styled.nav`
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px; // Increased padding
    height: 100px; // Increased height
`;

const NavLinks = styled.ul`
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
`;

const NavItem = styled.li`
    font-size: 250px;
    display: flex;
    padding: 12px 16px;
    border-radius: 5px;
`;

const NavLink = styled.a`
    display: block;
    color: white; // Default color
    text-align: center;
    text-decoration: none;
    padding: 5px 16px;
    position: relative;
    overflow: hidden;
    font-size: 25px;
    border-radius: 5px;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 4px;
        background-color: #17D475;
        transition: width 0.3s ease;
    }

    &:hover {
        color: #17D475; // Color change on hover
    }

    &:hover:after {
        width: 100%;
    }
`;

const Logo = styled.img`
    height: 100px; // Increased logo size
    
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0px;
`;



const NavBar = () => {
    return (
        <Navbar>
            <LogoContainer>
                <Logo src={logoImage} alt="Logo" />
                
            </LogoContainer>
            <NavLinks>
                <NavItem><NavLink href="/">Home</NavLink></NavItem>
                <NavItem><NavLink href="/about">About</NavLink></NavItem>
                <NavItem><NavLink href="/services">Tools</NavLink></NavItem>
                <NavItem><NavLink href="/contact">Pricing</NavLink></NavItem>
            </NavLinks>
        </Navbar>
    );
};

export default NavBar;
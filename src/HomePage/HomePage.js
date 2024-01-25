import React from 'react';
import TWNavBar from '../components/TWNavBar';
import HomeScreen from '../components/HomeScreen';
import AboutScreen from '../components/AboutScreen';
import ScrollBar from '../components/ScrollBar';


const HomePage = () => {
    return (
        <div>
        <TWNavBar/>
        <HomeScreen/>
        <AboutScreen/>
        <ScrollBar/>
        </div>
        
    );        
}

export default HomePage;
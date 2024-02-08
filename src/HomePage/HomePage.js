import React from 'react';
import TWNavBar from '../components/TWNavBar';
import HomeScreen from '../components/HomeScreen';
import AboutScreen from '../components/AboutScreen';
import ScrollBar from '../components/ScrollBar';
import { Routes, Route } from 'react-router-dom';
import Pricing from '../screens/Pricing/pricing';
import DFSOptimizer from '../screens/DFS-Optimizer/DFSOptimizer';



const HomePage = () => {
    return (
        <div>
            <TWNavBar/>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/DFS" element={<DFSOptimizer />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
        </div>
    );        
}

export default HomePage;
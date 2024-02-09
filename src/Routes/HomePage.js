import React from 'react';
import TWNavBar from '../shared-components/NavBar/TWNavBar.js';
import HomeScreen from '../screens/HomeScreen/HomeScreen.js';
import { Routes, Route } from 'react-router-dom';
import Pricing from '../screens/Pricing/pricing.js';
import DFSOptimizer from '../screens/DFS-Optimizer/DFSOptimizer.js';
import PlayerAnalysis from '../screens/Player-Analysis/playerAnalysis.js';



const AppRouting = () => {
    return (
        <div>
            <TWNavBar/>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/DFS" element={<DFSOptimizer />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/Player-Analysis" element={<PlayerAnalysis/>}/>
            </Routes>
        </div>
    );        
}

export default AppRouting;
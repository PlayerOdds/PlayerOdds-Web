import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DFSOptimizer from './DFSOptimizer'; 
import Pricing from '../screens/Pricing/pricing';
import HomeScreen from '../shared-components/HomeScreen';
import AboutScreen from '../screens/HomeScreen/components/AboutScreen';
import playerAnalysis from '../screens/Player-Analysis/playerAnalysis';


const AppRouter = () => {
    return (
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/Player-Analysis" element={<playerAnalysis />}/>
          <Route path="/DFS" element={<DFSOptimizer />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
    );
};

export default AppRouter;

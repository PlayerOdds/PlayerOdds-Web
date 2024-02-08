// src/components/AppRouter.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DFSOptimizer from './DFSOptimizer'; 
import Pricing from '../screens/Pricing/pricing';
import Contact from './Contact';
import HomeScreen from '../components/HomeScreen';
import AboutScreen from '../components/AboutScreen';


const AppRouter = () => {
    return (
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/DFS" element={<DFSOptimizer />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
    );
};

export default AppRouter;

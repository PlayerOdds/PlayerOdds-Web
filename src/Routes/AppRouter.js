// src/components/AppRouter.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DFSOptimizer from './DFSOptimizer'; 
import Pricing from '../screens/Pricing/pricing';
import Contact from './Contact';


const AppRouter = () => {
    return (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
    );
};

export default AppRouter;

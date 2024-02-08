import React from 'react';
import HomePage from './HomePage/HomePage';
import { BrowserRouter as Router } from 'react-router-dom';

function App () {

  return (
  <Router>
    <div>
        <HomePage/>
    </div>
  </Router>
  );
};

export default App;



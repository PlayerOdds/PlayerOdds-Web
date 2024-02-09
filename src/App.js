import React from 'react';
import AppRouting from './Routes/HomePage';
import { BrowserRouter as Router } from 'react-router-dom';

function App () {

  return (
  <Router>
    <div>
        <AppRouting/>
    </div>
  </Router>
  );
};

export default App;



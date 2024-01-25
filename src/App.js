import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import HomePage from './HomePage/HomePage';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile'
import { BrowserRouter as Router } from 'react-router-dom';

function App () {

  return (
  <Router>
    <div>
      {/* <TWNavBar/> */}
        <HomePage/>
    </div>
  </Router>
  );
};

export default App;



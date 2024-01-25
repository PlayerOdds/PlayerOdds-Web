import React, { useEffect, useState } from 'react';

import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import TWNavBar from './components/TWNavBar';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import ScrollBar from './components/ScrollBar';
import Pricing from './components/Pricing';

function App () {
  const {isLoading, error } = useAuth0();

  return (
    <div>
      <TWNavBar/>
      <HomeScreen/>
      <AboutScreen/>
      <ScrollBar/>
      <Pricing/>
        
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
      

        {/*<LogoutButton/>
        <Profile/>*/}
        </>
      )}
    
    </div>

  );
};

export default App;



import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import HomePage from './HomePage/HomePage';
import { BrowserRouter as Router } from 'react-router-dom';

function App () {
  const {isLoading, error } = useAuth0();

  return (
  <Router>
    <div>
      {/* <TWNavBar/> */}
        <HomePage/>
          {error && <p>Authentication Error</p>}
          {!error && isLoading && <p>Loading...</p>}
          {!error && !isLoading && (
            <>
            {/*<LogoutButton/>
            <Profile/>*/}
            </>
          )}
    </div>
  </Router>
  );
};

export default App;



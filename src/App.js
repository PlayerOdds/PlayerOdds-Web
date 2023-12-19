// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// const PlayerPropsComponent = () => {
//     const [playerPropsData, setPlayerPropsData] = useState({});
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const api_key = "qL5t9Y2h2Pli9L4sldqZM5L9IE2XitiyP75F2AtoRY"; // Replace with your actual API key
//     const date = "2023-03-07"; //Date we are Querying


//     useEffect(() => {
//         const fetchPlayerProps = async () => {
//             setIsLoading(true);
//             try {
//                 // Fetch games for the specific date
//                 const gamesResponse = await axios.get(`https://api.prop-odds.com/beta/games/nhl?date=${date}&tz=America/New_York&api_key=${api_key}`);
//                 const games = gamesResponse.data.games;

//                 for (let game of games) {
//                     // Check available markets for each game
//                     const marketsResponse = await axios.get(`https://api.prop-odds.com/beta/markets/${game.game_id}?api_key=${api_key}`);
//                     if (marketsResponse.data.markets.some(market => market.name === "player_first_goal")) {
//                         // Fetch player prop odds if 'player_first_goal' market is available
//                         const oddsResponse = await axios.get(`https://api.prop-odds.com/beta/odds/${game.game_id}/player_first_goal?api_key=${api_key}`);
//                         setPlayerPropsData(prevData => ({
//                             ...prevData,
//                             [game.game_id]: oddsResponse.data
//                         }));
//                     }
//                 }
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchPlayerProps();
//     }, []);

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;
//     if (Object.keys(playerPropsData).length === 0) return <div>No data available for this date.</div>;

//     return (
//         <div>
//             <h1>Player Prop Odds for {date}</h1>
//             {Object.entries(playerPropsData).map(([gameId, data]) => (
//                 <div key={gameId}>
//                     <h2>Game ID: {gameId}</h2>
//                     {data.sportsbooks.map(bookie => (
//                         <div key={bookie.bookie_key}>
//                             <h3>{bookie.bookie_key}</h3>
//                             {bookie.market.outcomes.map(outcome => (
//                                 <p key={outcome.name}>{outcome.name} - Odds: {outcome.odds}</p>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default PlayerPropsComponent;

import React, { useEffect, useState } from 'react';
// Uncomment the next line if you are using Axios
import axios from 'axios';

const App = () => {
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data using Axios
  const getPlayerDataAxios = async () => {
    try {
      const response = await axios.get('https://lgm2cuc93g.execute-api.us-east-2.amazonaws.com/default/getPlayerData');
      setPlayerData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching player data:', error);
      setError(error);
      setLoading(false);
    }
  };

  // Fetch data using native Fetch API
  const getPlayerDataFetch = async () => {
    try {
      const response = await fetch('https://lgm2cuc93g.execute-api.us-east-2.amazonaws.com/default/getPlayerData');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPlayerData(data);
      console.log(data)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching player data:', error);
      setError(error);
      setLoading(false);
    }
  };


  useEffect(() => {
    // Uncomment the method you prefer
    getPlayerDataAxios();
    getPlayerDataFetch();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* Render your player data here */}
      <pre>{JSON.stringify(playerData, null, 2)}</pre>
    </div>
  );
};

export default App;


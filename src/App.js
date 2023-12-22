import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar'; // Adjust the path if NavBar is in a different directory
import { getPlayerData } from './components/getPlayerData';
import DataDisplay from './components/datadisplay';

const App = () => {
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getPlayerData();
        setPlayerData(data);
      } catch (error) {
        console.error('Error fetching player data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <NavBar /> {/* NavBar component included here */}
      <h1>Player Props</h1>
      {playerData && <DataDisplay data={playerData} />}
    </div>
  );
};

export default App;

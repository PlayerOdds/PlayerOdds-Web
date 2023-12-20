import React, { useEffect, useState } from 'react';
import { getPlayerData } from './components/getPlayerData'; // Ensure this path is correct
import DataDisplay from './components/datadisplay'; // Import the DataDisplay component

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
      <h1>Player Props</h1>
      {playerData && <DataDisplay data={playerData} />}
    </div>
  );
};

export default App;

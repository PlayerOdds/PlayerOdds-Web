const PlayerStats = ({ last5, last10, sznAvg, vsOpponent }) => {
  // Helper function to determine the background color based on value
  const backgroundColor = (value) => {
    const numValue = parseFloat(value); // Ensure the value is treated as a number
    return numValue > 50 ? '#6ae487' : '#2a192b'; // Green or specific shade of red
  };

  // New helper function to determine the text color based on the background color
  const textColor = (value) => {
    const numValue = parseFloat(value);
    return numValue > 50 ? '#1a472a' : '#ee3a4a'; // Darker green for text on green, brighter red for text on red
  };

  return (
    <div className="flex flex-row items-left justify-start text-left mb-2">
      <div className="mr-4" style={{ backgroundColor: backgroundColor(last5), color: textColor(last5) }}>Last 5: {last5}</div>
      <div className="mr-4" style={{ backgroundColor: backgroundColor(last10), color: textColor(last10) }}>Last 10: {last10}</div>
      <div className="mr-4" style={{ backgroundColor: backgroundColor(sznAvg), color: textColor(sznAvg) }}>Season Avg: {sznAvg}</div>
      <div style={{ backgroundColor: backgroundColor(vsOpponent), color: textColor(vsOpponent) }}>Vs: {vsOpponent}</div>
    </div>
  );
};

export default PlayerStats;

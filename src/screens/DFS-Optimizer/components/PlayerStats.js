const PlayerStats = ({ last5, last10, sznAvg, vsOpponent }) => {
  
  const determineStyle = (value) => {
    // Check if the value is null first
    if (value === null) {
      return {
        backgroundColor: '#222431',
        color: '#d3d3d3',
        borderTop: '2px solid transparent', // Use transparent border for null values or consider using #444444 if needed
      };
    }

    const numValue = parseFloat(value);
    let bgColor, txtColor, borderColor;

    if (numValue > 20 && numValue < 80) {
      bgColor = '#222431'; 
      txtColor = '#d3d3d3';
      borderColor = 'transparent'; // Was '#transparent' before, corrected to 'transparent'
    } else if (numValue > 50) {
      bgColor = '#6ae487'; 
      txtColor = '#1a472a'; 
      borderColor = '#00FF00'; 
    } else {
      bgColor = '#2a192b'; 
      txtColor = '#ee3a4a'; 
      borderColor = '#FF0000'; 
    }

    return {
      backgroundColor: bgColor,
      color: txtColor,
      borderTop: `2px solid ${borderColor}`,
    };
  };

  const formatValue = (value) => value === null ? '-' : value;

  return (
    <div className="flex flex-row items-left justify-start text-left mb-2 rounded-b-xl" style={{ borderTop: '2px solid #444444', backgroundColor: '#222431' }}>
      <div className="p-1 pl-4 text-sm pr-4 rounded-bl-xl" style={determineStyle(last5)}>L5: {formatValue(last5)}</div>
      <div className="p-1 pl-4 text-sm pr-4" style={determineStyle(last10)}>L10: {formatValue(last10)}</div>
      <div className="p-1 pl-4 text-sm pr-4" style={determineStyle(sznAvg)}>SZN: {formatValue(sznAvg)}</div>
      <div className="p-1 pl-4 text-sm pr-4 rounded-br-xl" style={determineStyle(vsOpponent)}>H2H: {formatValue(vsOpponent)}</div>
    </div>
  );
};

export default PlayerStats;

export const imageStyle = {
  maxWidth: '70px',
  maxHeight: '25px',
  objectFit: 'contain'
};

export const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};

export const cellStyle = {
  color: 'white',
  textAlign: 'center',
  borderBottom: '2px solid black', 
};

export const rowSpacingAfter = {
  position: 'relative',
};

export const rowStyle = {
  marginBottom: '10px', // Adds space between rows
};



export const HeadercellStyle = {
  color: 'white',
  textAlign: 'center',
  borderBottom: '2px solid black',
  backgroundColor: '#1D3448',
};

export const getOddsToHitCellStyle = (percentage) => {
  const isUnder55 = parseFloat(percentage.replace('%', '')) < 55;
  return {
    color: 'white',
    textAlign: 'center',
    backgroundColor: isUnder55 ? '#4CBB17' : '#0b6623',
    borderRadius: '10px',
    padding: '15px',
    display: 'inline-block',
    borderBottom: '2px solid black',
  };
};

export const getO_UStyle = (text) => {
  
  const isOver = text.toLowerCase() === 'over';

 
  const backgroundColor = isOver ? '#122a31' : '#2a192b'; 
  const color = isOver ? '#6ae487' : '#ee3a4a'; 
  const borderColor = isOver ? '#1b3239' : '#322233';

  return {
    color: color,
    textAlign: 'center',
    backgroundColor: backgroundColor,
    borderRadius: '10px',
    padding: '15px',
    display: 'inline-block',
    border: `2px solid ${borderColor}`,
  };
};


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

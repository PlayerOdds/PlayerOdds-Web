import React from 'react';
import fanduelLogo from '../images/Fanduel_Shield_2022.png'; // Adjust the path as necessary

const TableRow = ({ item }) => {
  const tdStyle = { padding: '8px', border: '1px solid #ddd', textAlign: 'center' };

console.log(item)

  return (
    <tr style={{ backgroundColor: item.index % 2 === 0 ? '#f2f2f2' : 'transparent' }}>
      <td style={tdStyle}>{item.prop_name}</td>
      <td style={tdStyle}>{item.prop_description}</td>
      <td style={tdStyle}>
        {item.bookie_key === 'fanduel' ? (
          <img src={fanduelLogo} alt="FanDuel Logo" style={{ height: '30px', width: 'auto' }} />
        ) : (
          item.bookie_key
        )}
      </td>
      <td style={tdStyle}>{item.odds}</td>
      <td style={tdStyle}>{item.time_created}</td>
      <td style={tdStyle}>{item.handicap}</td>
      <td style={tdStyle}>{item.odds}</td>
      <td style={tdStyle}>{item.prop_name}</td>
      <td style={tdStyle}>{item.prop_description}</td>
      {/* <td style={tdStyle}>{item.market_key}</td> */}
    </tr>
  );
};

export default TableRow;

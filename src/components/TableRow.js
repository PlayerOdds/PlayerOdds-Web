import React from 'react';

const TableRow = ({ item }) => {
  const tdStyle = { padding: '8px', border: '1px solid #ddd', textAlign: 'center' };

console.log(item)

  return (
    <tr style={{ backgroundColor: item.index % 2 === 0 ? '#f2f2f2' : 'transparent' }}>
      <td style={tdStyle}>{item.prop_name}</td>
      <td style={tdStyle}>{item.prop_description}</td>
      <td style={tdStyle}>{item.handicap}</td>
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

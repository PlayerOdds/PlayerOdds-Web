import React from 'react';
import fanduelLogo from '../images/Fanduel_Shield_2022.png'; // Adjust the path as necessary

// URL for the FanDuel logo - replace with the actual URL


const styles = {
  table: {
    width: '90%',
    maxWidth: '800px',
    margin: '20px auto',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#f2f2f2',
    color: 'black',
    padding: '10px',
    border: '1px solid #ddd',
  },
  td: {
    padding: '8px',
    border: '1px solid #ddd',
    textAlign: 'center', // Center align content in cells
  },
  logo: {
    height: '30px', // Adjust the size as needed
    width: 'auto'
  },
  tr: {
    ':nth-child(even)': { backgroundColor: '#f2f2f2' }
  }
};

const DataDisplay = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return <p>No data available</p>;
  }

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Game ID</th>
          <th style={styles.th}>Bookie Key</th>
          <th style={styles.th}>Market Key</th>
          <th style={styles.th}>Time Created</th>
          <th style={styles.th}>Handicap</th>
          <th style={styles.th}>Odds</th>
          <th style={styles.th}>Prop Name</th>
          <th style={styles.th}>Prop Description</th>
          <th style={styles.th}>Participant Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} style={styles.tr}>
            <td style={styles.td}>{item.game_id}</td>
            <td style={styles.td}>
              {item.bookie_key === 'fanduel' ? (
                <img src={fanduelLogo} alt="FanDuel Logo" style={styles.logo} />
              ) : (
                item.bookie_key
              )}
            </td>
            <td style={styles.td}>{item.market_key}</td>
            <td style={styles.td}>{item.time_created}</td>
            <td style={styles.td}>{item.handicap}</td>
            <td style={styles.td}>{item.odds}</td>
            <td style={styles.td}>{item.prop_name}</td>
            <td style={styles.td}>{item.prop_description}</td>
            <td style={styles.td}>{item.participant_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataDisplay;

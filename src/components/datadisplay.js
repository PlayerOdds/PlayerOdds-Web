import React from 'react';
import fanduelLogo from '../images/Fanduel_Shield_2022.png';
import TableHeader from './TableHeader';
import TableRow from './TableRow';



const styles = {
  table: {
    width: '90%',
    maxWidth: '800px',
    margin: '20px auto',
    borderCollapse: 'collapse',
  },
}

const DataDisplay = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return <p>No data available</p>;
  }

  return (
    <table style={styles.table}>
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default DataDisplay;

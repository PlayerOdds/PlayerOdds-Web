const TableHeader = () => {
  const headerStyle = { backgroundColor: '#f2f2f2', color: 'black', padding: '10px', border: '1px solid #ddd' };

  return (
    <tr>
      <th style={headerStyle}>Game ID</th>
      <th style={headerStyle}>Bookie Key</th>
      <th style={headerStyle}>Market Key</th>
      <th style={headerStyle}>Time Created</th>
      <th style={headerStyle}>Handicap</th>
      <th style={headerStyle}>Odds</th>
      <th style={headerStyle}>Prop Name</th>
      <th style={headerStyle}>Prop Description</th>
      <th style={headerStyle}>Participant Name</th>
    </tr>
  );
};

export default TableHeader;
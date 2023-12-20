// SomeOtherFile.js
import { DraftKingsLogo, Bovada, FanDuel } from '../images/ImageRepository.js';

// Now you can use these images as required in your component or function



const TableHeader = () => {
  const headerStyle = { backgroundColor: '#f2f2f2', color: 'black', padding: '10px', border: '1px solid #ddd' };

  return (
    <tr>

      <th style={headerStyle}>Player Name</th>
      <th style={headerStyle}>Stats</th>
      <th style={headerStyle}>O/U</th>
      <th style={headerStyle}>Line</th>
      <th style={headerStyle}>Pinnacle</th>
      <th style={headerStyle}><img src={FanDuel} alt="DraftKings Logo" style={{ height: '30px', width: 'auto' }} /></th>
      <th style={headerStyle}><img src={DraftKingsLogo} alt="DraftKings Logo" style={{ height: '30px', width: 'auto' }} /></th>
      <th style={headerStyle}>Bet MGM</th>
      <th style={headerStyle}>BarStool</th>
    </tr>
  );
};

export default TableHeader;
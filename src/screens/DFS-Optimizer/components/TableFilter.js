import React from 'react';
import LeagueFilter from './LeagueFilter';
import SearchBar from './SearchBar';

function TableFilter() {
  return (
    // Tailwind CSS classes for flex container with items on opposite ends
    <div className="flex justify-between items-center w-full px-3 pt-5 py-2">
      <LeagueFilter />
      <SearchBar />
    </div>    
  );
}

export default TableFilter;
export function createData(name, Stat, O_U, SportsbookLine, PrizePicks, _OddstoHit, Book1, Book2, Book3, Book4, Book5, Book6) {
  return { name, Stat, O_U, SportsbookLine, PrizePicks, _OddstoHit, Book1, Book2, Book3, Book4, Book5, Book6 };
}

export const rows = [
  createData('Patrick Mahomes', 'Passing Yards', 'Under', 220.5, 225.5, '57.34%', -160, -156, -124, -143, -123, -154),
  createData('Brittney Grinder', 'Points + Rebs', 'Under', 13.5, 12.5, '57.13%', -160, -156, -124, -143, -123, -154),
  createData('Travis Kelce', 'Receptions', 'Over', 3.5, 4.5, '57.01%', -160, -156, -124, -143, -123, -154),
  createData('Rich Hill', 'Stikeouts', 'Under', 7, 8, '56.78%', -160, -156, -124, -143, -123, -154),
  createData('Trae Young', '1st Quarter Points', 'Under', 6, 6, '55.36%', -157, -156, -124, -143, -123, -154),
  createData('Luka Doncic', 'Total Points', 'Over', 31.5, 30.5, '54.36%', -157, -156, -124, -143, -123, -154),
  createData('Anthony Edwards', 'Points + Ast', 'Under', 39.5, 39.5, '54.36%', -157, -156, -124, -143, -123, -154),
  // Repeat for other entries...
  createData('Lamar Jackson', 'Rushing Yards', 'Over', 76.5, 76.5, '53.36%', -157, -156, -124, -143, -123, -154),
  // Note: Last few entries are duplicates and should be reviewed or removed.
];


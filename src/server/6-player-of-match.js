import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const matches = readFile("./src/data/matches.json");

// Find a player who has won the highest number of Player of the Match awards for each season
const getPlayersStat = () => {
  return matches.reduce((manOfMatch, match) => {
    if (!manOfMatch[match.season]) {
      manOfMatch[match.season] = {};
    }
    manOfMatch[match.season][match.player_of_match] =
      (manOfMatch[match.season][match.player_of_match] || 0) + 1;
    return manOfMatch;
  }, {});
};

const manOfSeason = () => {
  const playersStats = getPlayersStat();

  const man = {};
  for (const year in playersStats) {
    Object.entries(playersStats[year])
      .sort((a, b) => b[1] - a[1])
      .slice(0, 1)
      .map(([player]) => {
        man[year] = player;
      });
  }
  return man;
};
// console.log(manOfSeason(matches));
writeFile("./src/public/output/6-player-of-match.json", manOfSeason());

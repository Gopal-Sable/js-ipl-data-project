import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const matches = readFile("./src/data/matches.json");

// Find a player who has won the highest number of Player of the Match awards for each season
const getPlayersStat = () => {
  const manOfMatch = {};
  for (let i = 0; i < matches.length; i++) {
    const { season, player_of_match } = matches[i];

    if (!manOfMatch[season]) {
      manOfMatch[season] = {};
    }
    manOfMatch[season][player_of_match] =
      (manOfMatch[season][player_of_match] || 0) + 1;
  }
  return manOfMatch;
};

const manOfSeason = () => {
  const playersStats = getPlayersStat();

  let man = {};
  for (const year in playersStats) {
    let topPlayer = null;
    let maxScore = -Infinity;

    for (const player in playersStats[year]) {
      if (playersStats[year][player] > maxScore) {
        maxScore = playersStats[year][player];
        topPlayer = player;
      }
    }
    if (topPlayer !== null) {
      man[year] = topPlayer;
    }
  }

  return man;
};
// console.log(manOfSeason(matches));
writeFile("./src/public/output/6-player-of-match.json", manOfSeason());

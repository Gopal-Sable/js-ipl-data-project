import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const matches = await readFile("./src/data/matches.json");
const deliveries = await readFile("./src/data/deliveries.json");

// Find a player who has won the highest number of Player of the Match awards for each season
const manOfSeason = (matches) => {
  const results = matches.reduce((manOfMatch, match) => {
    if (!manOfMatch[match.season]) {
      manOfMatch[match.season] = {};
    }
    manOfMatch[match.season][match.player_of_match] =
      (manOfMatch[match.season][match.player_of_match] || 0) + 1;
    return manOfMatch;
  }, {});

  const man = {};
  for (const key in results) {
    Object.entries(results[key])
      .sort((a, b) => b[1] - a[1])
      .slice(0, 1)
      .map((data) => {
        man[key] = data[0];
      });
  }
  return man;
};
// console.log(manOfSeason(matches));
writeFile("./src/public/output/6-player-of-match.json", manOfSeason(matches));

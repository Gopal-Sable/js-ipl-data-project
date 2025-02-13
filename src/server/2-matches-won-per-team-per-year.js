import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const matches = readFile("./src/data/matches.json");

// Number of matches won per team per year in IPL.

const matchesWonPerYear = (matches) => {
  let teams = {};
  for (let i = 0; i < matches.length; i++) {
    let matchWinner = matches[i].winner;
    let matchSeason = matches[i].season;
    if (!teams[matchWinner]) {
      teams[matchWinner] = {};
    }
    teams[matchWinner][matchSeason] =
      (teams[matchWinner][matchSeason] || 0) + 1;
  }
  return teams;
};

const result = matchesWonPerYear(matches);
writeFile("./src/public/output/2-matches-won-per-team-per-year.json", result);

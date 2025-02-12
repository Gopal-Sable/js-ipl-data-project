import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const matches = readFile("./src/data/matches.json");

// Number of matches won per team per year in IPL.

const matchesWonPerYear = (matches) => {
  return matches.reduce((teams, match) => {
    if (!teams[match.winner]) {
      teams[match.winner] = {};
    }
    teams[match.winner][match.season] =
      (teams[match.winner][match.season] || 0) + 1;

    return teams;
  }, {});
};

const result = matchesWonPerYear(matches);
writeFile("./src/public/output/2-matches-won-per-team-per-year.json", result);

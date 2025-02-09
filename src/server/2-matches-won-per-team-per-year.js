import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const data = await readFile("./src/data/matches.json");

// Number of matches won per team per year in IPL.

const matchesWonPerYear = (data) => {
  return data.reduce((teams, match) => {
    if (!teams[match.winner]) {
      teams[match.winner] = {};
    }
    teams[match.winner][match.season] =
      (teams[match.winner][match.season] || 0) + 1;

    return teams;
  }, {});
};

writeFile(
  "./src/public/output/2-matches-won-per-team-per-year.json",
  matchesWonPerYear(data)
);

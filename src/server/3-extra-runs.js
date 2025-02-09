import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const matches = readFile("./src/data/matches.json");
const deliveries = readFile("./src/data/deliveries.json");

// 3 Extra runs conceded per team in the year 2016

function extraRunsConceded(year, matches, deliveries) {
  const seasonMatchIds = matches
    .filter((match) => match.season == year)
    .map(({ id }) => id);

  const extras = {};

  deliveries.forEach(({ match_id, bowling_team, extra_runs }) => {
    if (seasonMatchIds.includes(match_id)) {
      extras[bowling_team] = (extras[bowling_team] || 0) + parseInt(extra_runs);
    }
  });

  return extras;
}

const result = extraRunsConceded(2016, matches, deliveries);

writeFile("./src/public/output/3-extra-runs.json", result);

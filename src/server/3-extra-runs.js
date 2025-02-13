import { log } from "console";
import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
import getMatchIds from "../utility/getMatchIds.js";
const deliveries = readFile("./src/data/deliveries.json");

// 3 Extra runs conceded per team in the year 2016

function extraRunsConceded(year) {
  const seasonMatchIds = getMatchIds(year);

  const extras = {};
  for (let i = 0; i < deliveries.length; i++) {
    const { match_id, bowling_team, extra_runs } = deliveries[i];
    if (seasonMatchIds.includes(match_id)) {
      extras[bowling_team] = (extras[bowling_team] || 0) + parseInt(extra_runs);
    }
  }
  return extras;
}

const result = extraRunsConceded(2016);
writeFile("./src/public/output/3-extra-runs.json", result);

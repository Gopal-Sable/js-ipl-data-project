import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
import getMatchIds from "../utility/getMatchIds.js";
const deliveries = readFile("./src/data/deliveries.json");

// 3 Extra runs conceded per team in the year 2016

function extraRunsConceded(year) {
  // const seasonMatchIds = getMatchIds(year);

  // const extras = deliveries.reduce(
  //   (extra, { match_id, bowling_team, extra_runs }) => {
  //     if (seasonMatchIds.includes(match_id)) {
  //       extra[bowling_team] = (extra[bowling_team] || 0) + parseInt(extra_runs);
  //     }
  //     return extra;
  //   },
  //   {}
  // );
  // return extras;

  
}

const result = extraRunsConceded(2016);

writeFile("./src/public/output/3-extra-runs.json", result);

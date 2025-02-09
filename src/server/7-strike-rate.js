// Find the strike rate of a batsman for each season

import readFile from "./fileReader.js";
const matches = await readFile("./src/data/matches.json");
const deliveries = await readFile("./src/data/deliveries.json");

const result = matches.reduce((seasonMatchIds, match) => {
  if (!seasonMatchIds[match.season]) {
    seasonMatchIds[match.season] = [match.id];
  } else {
    seasonMatchIds[match.season] = [...seasonMatchIds[match.season], match.id];
  }
  return seasonMatchIds;
}, {});

// console.log(result);

const strikeRates = {};
deliveries.forEach((ball) => {
  for (const key in result) {
    if (result[key].includes(ball.match_id)) {
      if (!strikeRates[key]) {
        strikeRates[key] = {};
      }
      if (!strikeRates[key][ball.batsman]) {
        strikeRates[key][ball.batsman] = { runs: 0, totalballs: 0 };
      }
      strikeRates[key][ball.batsman].runs += parseInt(ball.batsman_runs);

      if (ball.extra_runs == "0") {
        strikeRates[key][ball.batsman].totalballs++;
      }
      strikeRates[key][ball.batsman].strikRate = (
        (strikeRates[key][ball.batsman].runs * 100) /
        strikeRates[key][ball.batsman].totalballs
      ).toFixed(2);
    }
  }
});
console.log(strikeRates);

// {
//     2015:[1,2,3],
//     2016:[5,6,7]
// }

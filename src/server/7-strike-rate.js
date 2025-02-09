// Find the strike rate of a batsman for each season

import readFile from "./fileReader.js";
const matches = await readFile("./src/data/matches.json");
const deliveries = await readFile("./src/data/deliveries.json");

function strikRatesOfSeasons(matches, deliveries) {
  const matchIds = matches.reduce((seasonMatchIds, match) => {
    if (!seasonMatchIds[match.season]) {
      seasonMatchIds[match.season] = [match.id];
    } else {
      seasonMatchIds[match.season].push(match.id)
    }
    return seasonMatchIds;
  }, {});

  // console.log(matchIds);

  const strikeRates = {};
  deliveries.forEach(({match_id,batsman,batsman_runs,extra_runs}) => {
    for (const key in matchIds) {
      if (matchIds[key].includes(match_id)) {
        if (!strikeRates[key]) {
          strikeRates[key] = {};
        }
        if (!strikeRates[key][batsman]) {
          strikeRates[key][batsman] = { runs: 0, totalballs: 0 };
        }
        strikeRates[key][batsman].runs += parseInt(batsman_runs);

        if (extra_runs == "0") {
          strikeRates[key][batsman].totalballs++;
        }
        
      }
    }
  });
  for (const season in strikeRates) {
    for (const batsman in strikeRates[season]) {
      const { runs, totalballs } = strikeRates[season][batsman];
      strikeRates[season][batsman] = +(runs / totalballs * 100).toFixed(2) ;
    }
  }
  return strikeRates;
}
// console.log(strikRatesOfSeasons(matches,deliveries));

// Find the strike rate of a batsman for each season

import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const matches = readFile("./src/data/matches.json");
const deliveries = readFile("./src/data/deliveries.json");

function matchIdsOfSeason() {
  const ids = matches.reduce((seasonMatchIds, match) => {
    if (!seasonMatchIds[match.season]) {
      seasonMatchIds[match.season] = [match.id];
    } else {
      seasonMatchIds[match.season].push(match.id);
    }
    return seasonMatchIds;
  }, {});

  return ids;
}

function getStatsOfPlayers(matchIds) {
  return deliveries.reduce(
    (stats, { match_id, batsman, batsman_runs, wide_runs }) => {
      for (const season in matchIds) {
        if (matchIds[season].includes(match_id)) {
          if (!stats[season]) {
            stats[season] = {};
          }
          if (!stats[season][batsman]) {
            stats[season][batsman] = { runs: 0, totalballs: 0 };
          }
          stats[season][batsman].runs += parseInt(batsman_runs);

          if (wide_runs == "0") {
            stats[season][batsman].totalballs++;
          }
        }
      }
      return stats;
    },
    {}
  );
}

function strikRatesOfSeasons() {
  const matchIds = matchIdsOfSeason();
  const playersStats = getStatsOfPlayers(matchIds);

  for (const season in playersStats) {
    for (const batsman in playersStats[season]) {
      const { runs, totalballs } = playersStats[season][batsman];
      playersStats[season][batsman] = +((runs / totalballs) * 100).toFixed(2);
    }
  }
  return playersStats;
}

writeFile("./src/public/output/7-strike-rate.json", strikRatesOfSeasons());

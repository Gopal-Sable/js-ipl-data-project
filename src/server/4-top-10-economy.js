// Top 10 economical bowlers in the year 2015

import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
import getMatchIds from "../utility/getMatchIds.js";

const deliveries = readFile("./src/data/deliveries.json");

function getBowlersStats(matchesOfYear) {
  return deliveries.reduce(
    (
      bowlerStat,
      { match_id, bowler, wide_runs, noball_runs, batsman_runs }
    ) => {
      if (matchesOfYear.includes(match_id)) {
        const runs =
          Number(wide_runs) + Number(noball_runs) + Number(batsman_runs);

        if (!bowlerStat[bowler]) {
          bowlerStat[bowler] = { total_runs: 0, total_balls: 0 };
        }
        bowlerStat[bowler].total_runs += runs;

        if (wide_runs === "0" && noball_runs === "0") {
          bowlerStat[bowler].total_balls++;
        }
      }
      return bowlerStat;
    },
    {}
  );
}

function getTopEconomicalBowlers(year, topN = 10) {
  const matchesOfYear = getMatchIds(year);
  const bowlersStat = getBowlersStats(matchesOfYear);

  const economyData = Object.entries(bowlersStat)
    .map(([bowler, {total_runs,total_balls}]) => ({
      bowler,
      economy:
        Math.round((total_runs / (total_balls / 6)) * 100) / 100,
    }))
    .sort((a, b) => a.economy - b.economy)
    .slice(0, topN);

  return economyData;
}

console.log();
writeFile(
  "./src/public/output/4-top-10-economy.json",
  getTopEconomicalBowlers(2015)
);

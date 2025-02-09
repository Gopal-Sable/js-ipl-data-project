// Top 10 economical bowlers in the year 2015

import readFile from "./fileReader.js";
import writeFile from "./fileWritter.js";
const matches = await readFile("./src/data/matches.json");
const deliveries = await readFile("./src/data/deliveries.json");

function getTopEconomicalBowlers(year, topN = 10) {
  const matchesOfYear = matches
    .filter(({ season }) => season == year)
    .map(({ id }) => id);

  const data = {};
  deliveries.forEach(
    ({ match_id, bowler, wide_runs, noball_runs, batsman_runs }) => {
      if (matchesOfYear.includes(match_id)) {
        const runs =
          Number(wide_runs) + Number(noball_runs) + Number(batsman_runs);

        if (!data[bowler]) {
          data[bowler] = { total_runs: 0, total_balls: 0 };
        }

        data[bowler].total_runs += runs;

        if (wide_runs === "0" && noball_runs === "0") {
          data[bowler].total_balls++;
        }
      }
    }
  );

  const economyData = Object.entries(data)
    .map(([bowler, stats]) => ({
      bowler,
      economy:
        Math.round((stats.total_runs / (stats.total_balls / 6)) * 100) / 100,
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
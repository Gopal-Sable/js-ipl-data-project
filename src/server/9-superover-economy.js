// Find the bowler with the best economy in super overs
import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const deliveries = readFile("./src/data/deliveries.json");

function getBowlersStats() {
  const bowlersStat = deliveries.reduce(
    (
      stats,
      { is_super_over, wide_runs, noball_runs, batsman_runs, bowler }
    ) => {
      if (is_super_over === "1") {
        let runs =
          parseInt(wide_runs) + parseInt(noball_runs) + parseInt(batsman_runs);

        if (!stats[bowler]) {
          stats[bowler] = { total_runs: 0, total_balls: 0 };
        }
        stats[bowler].total_runs += runs;
        if (wide_runs === "0" && noball_runs === "0") {
          stats[bowler].total_balls++;
        }
      }
      return stats;
    },
    {}
  );
  return bowlersStat;
}

const bestEconomyBowler = () => {
  let bowlersStat = getBowlersStats();
  let bestBowler = null;
  let bestEconomy = Infinity;

  for (const [bowler, { total_runs, total_balls }] of Object.entries(
    bowlersStat
  )) {
    const economy = (total_runs / (total_balls / 6)).toFixed(2);
    if (parseInt(economy) < bestEconomy) {
      bestEconomy = economy;
      bestBowler = bowler;
    }
  }

  return { bestBowler, bestEconomy };
};
const result = bestEconomyBowler();
writeFile("./src/public/output/9-super-over-economy.json", result);

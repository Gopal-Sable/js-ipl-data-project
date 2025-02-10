// Find the bowler with the best economy in super overs
import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const matches = readFile("./src/data/matches.json");
const deliveries = readFile("./src/data/deliveries.json");

const bestEconomyBowler = (matches, deliveries) => {
  const matchesOfYear = matches.map((match) => match.id);

  let data = {};
  deliveries.forEach(
    ({
      match_id,
      is_super_over,
      wide_runs,
      noball_runs,
      batsman_runs,
      bowler,
    }) => {
      if (matchesOfYear.includes(match_id) && is_super_over === "1") {
        let runs =
          parseInt(wide_runs) + parseInt(noball_runs) + parseInt(batsman_runs);

        if (!data[bowler]) {
          data[bowler] = {};
          data[bowler].total_runs = 0;
          data[bowler].total_balls = 0;
        }
        data[bowler].total_runs += runs;
        if (wide_runs === "0" && noball_runs === "0") {
          data[bowler].total_balls++;
        }
      }
    }
  );
  let bestBowler = null;
  let bestEconomy = Infinity;

  for (const [bowler, { total_runs, total_balls }] of Object.entries(data)) {
    const economy = (total_runs / (total_balls / 6)).toFixed(2);
    if (parseInt(economy) < bestEconomy) {
      bestEconomy = economy;
      bestBowler = bowler;
    }
  }

  return { bestBowler, bestEconomy };
};

// console.log(bestEconomyBowler(matches, deliveries));
writeFile(
  "./src/public/output/9-super-over-economy.json",
  bestEconomyBowler(matches, deliveries)
);

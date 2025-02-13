// Top 10 economical bowlers in the year 2015

import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
import getMatchIds from "../utility/getMatchIds.js";

const deliveries = readFile("./src/data/deliveries.json");

function getBowlersStats(matchesOfYear) {
  // return deliveries.reduce(
  //   (
  //     bowlerStat,
  //     { match_id, bowler, wide_runs, noball_runs, batsman_runs }
  //   ) => {
  //     if (matchesOfYear.includes(match_id)) {
  //       const runs =
  //         Number(wide_runs) + Number(noball_runs) + Number(batsman_runs);

  //       if (!bowlerStat[bowler]) {
  //         bowlerStat[bowler] = { total_runs: 0, total_balls: 0 };
  //       }
  //       bowlerStat[bowler].total_runs += runs;

  //       if (wide_runs === "0" && noball_runs === "0") {
  //         bowlerStat[bowler].total_balls++;
  //       }
  //     }
  //     return bowlerStat;
  //   },
  //   {}
  // );
  const bowlersStat = {};

  for (let i = 0; i < deliveries.length; i++) {
    const { match_id, bowler, wide_runs, noball_runs, batsman_runs } =
      deliveries[i];

    if (matchesOfYear.includes(match_id)) {
      const runs =
        Number(wide_runs) + Number(noball_runs) + Number(batsman_runs);

      if (!bowlersStat[bowler]) {
        bowlersStat[bowler] = { total_runs: 0, total_balls: 0 };
      }
      bowlersStat[bowler].total_runs += runs;

      if (wide_runs === "0" && noball_runs === "0") {
        bowlersStat[bowler].total_balls++;
      }
    }

  }
  return bowlersStat;
}

function getTopEconomicalBowlers(year, topN = 10) {
  const matchesOfYear = getMatchIds(year);
  const bowlersStat = getBowlersStats(matchesOfYear);

  const bowlerstatArr = Object.entries(bowlersStat);
  let economyData = [];
  for (const bowler in bowlersStat) {
    const {total_runs, total_balls }=bowlersStat[bowler]
    let economy = (total_runs*6 / total_balls).toFixed(2);
    economyData.push({bowler,economy})
  }
 
  const result = economyData
    .sort((a, b) => {
      return a.economy - b.economy;
    })
    .slice(0, topN);
  return result;
}

const result = getTopEconomicalBowlers(2015);
writeFile("./src/public/output/4-top-10-economy.json", result);

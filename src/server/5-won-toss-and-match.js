import readFile from "./fileReader.js";
const matches = await readFile("./src/data/matches.json");
const deliveries = await readFile("./src/data/deliveries.json");
// Find the number of times each team won the toss and also won the match

const matchesWin = () => {
  return matches.reduce((results, match) => {
    if (match.toss_winner == match.winner) {
      if (!results[match.winner]) {
        results[match.winner] = 0;
      }
      results[match.winner]++;
    }
    return results;
  }, {});
};

console.log(matchesWin());

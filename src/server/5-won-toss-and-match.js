import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const matches = readFile("./src/data/matches.json");
const deliveries = readFile("./src/data/deliveries.json");
// Find the number of times each team won the toss and also won the match

const matchesWin = (matches) => {
  return matches.reduce((results, match) => {
    if (match.toss_winner == match.winner) {
      results[match.winner] = (results[match.winner] || 0) + 1;
    }
    return results;
  }, {});
};

writeFile("./src/public/output/5-won-toss-and-match.json", matchesWin(matches));

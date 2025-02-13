import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const matches = readFile("./src/data/matches.json");
const deliveries = readFile("./src/data/deliveries.json");
// Find the number of times each team won the toss and also won the match

const matchesWin = (matches) => {
  const matchesResults = {};
  for (let i = 0; i < matches.length; i++) {
    const { winner, toss_winner } = matches[i];
    if (toss_winner == winner) {
      matchesResults[winner] = (matchesResults[winner] || 0) + 1;
    }
  }
  return matchesResults;
};

writeFile("./src/public/output/5-won-toss-and-match.json", matchesWin(matches));

import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const matches = readFile("./src/data/matches.json");

// Number of matches played per year for all the years in IPL.
function matchesPerYear(matches) {
  // console.log("Output generated");
  return matches.reduce((matchYears, { season }) => {
    matchYears[season] = (matchYears[season] || 0) + 1;
    return matchYears;
  }, {});
}

const result = matchesPerYear(matches);
writeFile("./src/public/output/1-matches-per-year.json", result);

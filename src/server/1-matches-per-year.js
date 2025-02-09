import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const data = readFile("./src/data/matches.json");

// Number of matches played per year for all the years in IPL.
function matchesPerYear(data) {
  console.log("Output generated");
  return data.reduce((matchYears, match) => { 
    if (matchYears[match.season]) {
      matchYears[match.season]++;
    } else {
      matchYears[match.season] = 1;
    }
    return matchYears;
  }, {});
}

writeFile("./src/public/output/1-matches-per-year.json", matchesPerYear(data));

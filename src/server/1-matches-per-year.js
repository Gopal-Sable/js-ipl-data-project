import readFile from "../utility/fileReader.js";
import writeFile from "../utility/fileWritter.js";
const matches = readFile("./src/data/matches.json");

// Number of matches played per year for all the years in IPL.
function matchesPerYear(matches) {
  let matchesPerYear={}
  for (let i = 0; i < matches.length; i++) {
    let matchSeason=matches[i].season;
    matchesPerYear[matchSeason]=(matchesPerYear[matchSeason]|| 0)+1;   
  }
  return matchesPerYear;
}

const result = matchesPerYear(matches);
writeFile("./src/public/output/1-matches-per-year.json", result);

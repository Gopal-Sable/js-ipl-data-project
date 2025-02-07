import readFile from "./fileReader.js";
import writeFile from "./fileWritter.js";
const data = await readFile("./src/data/matches.json");

// Number of matches played per year for all the years in IPL.
function matchesPerYear(data) {
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

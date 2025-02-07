// import { log } from "console";
import readFile from "./fileReaader.js";
import writeFile from "./fileWritter.js";
const data = await readFile("./src/data/matches.json");

// console.log(data);

// Number of matches played per year for all the years in IPL.
function matchesPerYear(data){
 return data.reduce((matchYears,match)=>{
    if (matchYears[match.season]) {
      matchYears[match.season]++;
    }else{
      matchYears[match.season]=1;
    }
    return matchYears;
  },{})
}

// console.log(matchesPerYear(data));


 writeFile("./src/public/output/matchesPerYear.json",matchesPerYear(data))

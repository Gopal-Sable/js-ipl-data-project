import readFile from "./fileReaader.js";
const data = await readFile("./src/data/matches.json");

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



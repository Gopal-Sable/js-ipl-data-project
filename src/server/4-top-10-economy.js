// Top 10 economical bowlers in the year 2015

import readFile from "./fileReader.js";
const matches = await readFile("./src/data/matches.json");
const deliveries = await readFile("./src/data/deliveries.json");

const matchesInYear=(year)=>{
   return matches.filter((match)=>{
     return  match.season==year
    }).map((match)=>match.id)
}
const matchesOfYear= matchesInYear(2015);

let data={}
deliveries.forEach(over => {
    if(matchesOfYear.includes(over.match_id)){
        let runs=parseInt(over.wide_runs )+ parseInt(over.noball_runs) + parseInt(over.batsman_runs)
    //    let overs= ((Total Balls - No Balls - Wide Balls) / 6)

        if (!data[over.bowler]) {
            data[over.bowler]={}
            data[over.bowler].total_runs=0
            data[over.bowler].total_balls=0
        }
        data[over.bowler].total_runs +=runs;
        if (over.wide_runs==="0" && over.noball_runs==="0") {
            data[over.bowler].total_balls++;
        }
        data[over.bowler].economy=(data[over.bowler].total_runs/data[over.bowler].total_balls)*6
    }
});



console.log(Object.entries(data).sort((a,b)=>{
    return a[1].economy - b[1].economy})
    .map(data=>{
        return {economy:data[1].economy}
    }))

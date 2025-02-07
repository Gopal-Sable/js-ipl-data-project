import readFile from "./fileReaader.js";
const data = await readFile("./src/data/matches.json");

// Extra runs conceded per team in the year 2016
const extras=(year)=>{
    data.filter((data)=>{
        data.season==year
    })
     
}
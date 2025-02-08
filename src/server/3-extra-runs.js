import readFile from "./fileReader.js";
const matches = await readFile("./src/data/matches.json");
const deliveries = await readFile("./src/data/deliveries.json");

// 3 Extra runs conceded per team in the year 2016
const seasonMatchIds = (year) => {
  return matches
    .filter((data) => data.season == year)
    .map((match) => match.id);
};
const data = seasonMatchIds(2016);
// console.log(data);

let extras={}
deliveries.forEach(delivery => {
    if(data.includes(delivery.match_id)){
        let team=delivery.bowling_team;
        let extraRuns= parseInt(delivery.extra_runs);
        if (!extras[team]) {
            extras[team]=0
        }
        extras[team]+=extraRuns;
    }
});
// console.log(extras);



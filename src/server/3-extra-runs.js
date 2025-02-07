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
console.log(data);

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
console.log(extras);

// {"match_id": "1",
//     "inning": "1",
//     "batting_team": "Sunrisers Hyderabad",
//     "bowling_team": "Royal Challengers Bangalore",
//     "over": "1",
//     "ball": "1",
//     "batsman": "DA Warner",
//     "non_striker": "S Dhawan",
//     "bowler": "TS Mills",
//     "is_super_over": "0",
//     "wide_runs": "0",
//     "bye_runs": "0",
//     "legbye_runs": "0",
//     "noball_runs": "0",
//     "penalty_runs": "0",
//     "batsman_runs": "0",
//     "extra_runs": "0",
//     "total_runs": "0",
//     "player_dismissed": "",
//     "dismissal_kind": "",
//     "fielder": ""
//   },
// 
// console.log(season(2016));

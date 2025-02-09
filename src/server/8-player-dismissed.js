// Find the highest number of times one player has been dismissed by another player

import readFile from "./fileReader.js";
const matches = await readFile("./src/data/matches.json");
const deliveries = await readFile("./src/data/deliveries.json");

const a=deliveries.reduce((players,over)=>{
    if (over.player_dismissed!="") {
        if (!players[over.player_dismissed]) {
            players[over.player_dismissed]=0;
        }
        players[over.player_dismissed]++;
    }
    return players;
},{})


console.log(Object.entries(a).sort((a,b)=>
    b[1]-a[1]
).slice(0,1).map(data=> {return {[data[0]]:data[1]}}))

// {
//     "match_id": "1",
//     "inning": "1",
//     "batting_team": "Sunrisers Hyderabad",
//     "bowling_team": "Royal Challengers Bangalore",
//     "over": "1",
//     "ball": "2",
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

//   {
//     "id": "2",
//     "season": "2017",
//     "city": "Pune",
//     "date": "2017-04-06",
//     "team1": "Mumbai Indians",
//     "team2": "Rising Pune Supergiant",
//     "toss_winner": "Rising Pune Supergiant",
//     "toss_decision": "field",
//     "result": "normal",
//     "dl_applied": "0",
//     "winner": "Rising Pune Supergiant",
//     "win_by_runs": "0",
//     "win_by_wickets": "7",
//     "player_of_match": "SPD Smith",
//     "venue": "Maharashtra Cricket Association Stadium",
//     "umpire1": "A Nand Kishore",
//     "umpire2": "S Ravi",
//     "umpire3": ""
//   },

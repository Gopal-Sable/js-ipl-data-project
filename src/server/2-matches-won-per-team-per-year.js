import readFile from "./fileReaader.js";
const data = await readFile("./src/data/matches.json");

const matchDemoData ={
    "id": "1",
    "season": "2017",
    "city": "Hyderabad",
    "date": "2017-04-05",
    "team1": "Sunrisers Hyderabad",
    "team2": "Royal Challengers Bangalore",
    "toss_winner": "Royal Challengers Bangalore",
    "toss_decision": "field",
    "result": "normal",
    "dl_applied": "0",
    "winner": "Sunrisers Hyderabad",
    "win_by_runs": "35",
    "win_by_wickets": "0",
    "player_of_match": "Yuvraj Singh",
    "venue": "\"Rajiv Gandhi International Stadium",
    "umpire1": "Uppal\"",
    "umpire2": "AY Dandekar",
    "umpire3": "NJ Llong"
  }
  
// Number of matches won per team per year in IPL.

// Number of matches won per team per year in IPL.
// Extra runs conceded per team in the year 2016
// Top 10 economical bowlers in the year 2015
// Find the number of times each team won the toss and also won the match
// Find a player who has won the highest number of Player of the Match awards for each season
// Find the strike rate of a batsman for each season
// Find the highest number of times one player has been dismissed by another player
// Find the bowler with the best economy in super overs

  const matchResults=(data)=>{
    const winnerData= data.reduce((teams,match)=>{
        if (teams[match.winner]) {
            teams[match.winner]=[...teams[match.winner],match]
        }else{
            teams[match.winner]=[match];
        }
      
        return teams;
    },{})
    .reduce(
        (year,match)=>{
            
        }
    )
  
    return winnerData;
    
  }
 

console.log(matchResults(data));
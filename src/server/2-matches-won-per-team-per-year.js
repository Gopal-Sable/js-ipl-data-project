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
  const matchResults=(data)=>{
    const winnerData= data.reduce((teams,matche)=>{
        if(!teams[matche.winner]) teams[matche.winner]={};

        return teams;
    },{})
    return winnerData;
    
  }

console.log(matchResults(data));
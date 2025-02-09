// Find the bowler with the best economy in super overs
import readFile from "./fileReader.js";
const matches = await readFile("./src/data/matches.json");
const deliveries = await readFile("./src/data/deliveries.json");

const matchesInYear = () => {
  return matches.map((match) => match.id);
};
const matchesOfYear = matchesInYear();

// console.log(matchesOfYear);

let data = {};
// deliveries.
deliveries.forEach(over => {
    if(matchesOfYear.includes(over.match_id) && over.is_super_over==="1"){
        let runs=parseInt(over.wide_runs )+ parseInt(over.noball_runs) + parseInt(over.batsman_runs)

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

console.log(
  Object.entries(data)
    .sort((a, b) => {
      return a[1].economy - b[1].economy;
    })
    .map((data) => {
      return { [data[0]]: data[1].economy };
    }).slice(0,1)
);

import readFile from "../utility/fileReader.js";
const matches = readFile("./src/data/matches.json");

export default function getMatchIds(year) {
  let ids=[];
  for (let i = 0; i < matches.length; i++) {
    let season=matches[i].season;
    let id=matches[i].id;
    if (season==year) {
      ids.push(id)
    }    
  }
  return ids;
}

console.log(getMatchIds(2015));

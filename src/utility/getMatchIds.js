import readFile from "../utility/fileReader.js";
const matches = readFile("./src/data/matches.json");

export default function getMatchIds(year) {
  return matches.reduce((ids, { id, season }) => {
    if (season == year) {
      ids.push(id);
    }
    return ids;
  }, []);
}

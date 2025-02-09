import writeFile from "./fileWritter.js";
import fs from "fs";
import csv from "csv-parser";

function csvToJson(filePath, callback) {
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => callback(null, results))
    .on("error", (error) => callback(error, null));
}

let matchesFilePath = "src/data/matches.csv";
let deliveriesFilePath = "src/data/deliveries.csv";
let matchJson = "src/data/matches.json";
let deliveriesJson = "src/data/deliveries.json";

csvToJson(matchesFilePath, (err, jsonData) => {
  if (err) {
    console.error("Error converting matches CSV:", err);
    return;
  }
  writeFile(matchJson, jsonData);
  console.log("Matches JSON file written successfully!");
});

csvToJson(deliveriesFilePath, (err, jsonData) => {
  if (err) {
    console.error("Error converting deliveries CSV:", err);
    return;
  }
  writeFile(deliveriesJson, jsonData);
  console.log("Deliveries JSON file written successfully!");
});


// export default function csvToJson(path) {
//  const csvString=fs.readFileSync(filePath, "utf8");
//   const rows = csvString.split("\n").filter((row) => row.trim() !== "");

//   const headers = rows[0].split(",");
//   const jsonData = [];

//   for (let i = 1; i < rows.length; i++) {
//     const values = rows[i].split(",");
//     const obj = {};
//     for (let j = 0; j < headers.length; j++) {
//       const key = headers[j].trim();
//       const value = values[j] ? values[j].trim() : "";
//       obj[key] = value;
//     }


//     jsonData.push(obj);
//   }
//   return JSON.stringify(jsonData, null, 2);
// }



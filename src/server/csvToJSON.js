// import {promises as fs} from 'fs';
// import csv from 'csv-parser';
// import readFile from "./fileReader.js";
import writeFile from "./fileWritter.js";

import fs from "fs";
import csv from "csv-parser";

async function csvToJson(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
}

let matchesFilePath = "src/data/matches.csv";
let deliveriesFilePath = "src/data/deliveries.csv";
let matchJson = "src/data/matches.json";
let deliveriesJson = "src/data/deliveries.json";

const matche = await csvToJson(matchesFilePath, (err, jsonData) => {
  if (err) {
    return err;
  } else {
    return jsonData;
  }
});

const deliveries = await csvToJson(deliveriesFilePath, (err, jsonData) => {
  if (err) {
    return err;
  } else {
    return jsonData;
  }
});

writeFile(matchJson, matche);
writeFile(deliveriesJson, deliveries);

// export default function csvToJson(csvString) {
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



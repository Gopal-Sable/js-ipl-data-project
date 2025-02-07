import { promises as fs } from "fs";

// export default async function writeFile(filePath,data) {
//     const dataString=JSON.stringify(data);
//   return JSON.parse(await fs.writeFile(filePath, dataString, "utf8"));
// }

export default function writeFile(filePath, data) {
  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log("Data has been saved!");
  });
}

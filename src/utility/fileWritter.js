import  fs  from "fs";

export default function writeFile(filePath, data) {
  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log("Data has been saved!");
  });
}

import fs from "fs";

export default function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8"); 
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading file ${filePath}:`, err);
    throw err;
  }
}
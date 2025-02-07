import { promises as fs } from "fs";

export default async function readFile(filePath) {
  return JSON.parse(await fs.readFile(filePath, "utf8"));
}

import { readdirSync, readFileSync } from "fs";
import path from 'path'

export async function getFiles() {
  return readdirSync(path.join(process.cwd(), 'src', 'context'), 'utf-8');
}
export const readFile = async (filename: string) => {
  return readFileSync(path.join(process.cwd(), 'src', 'context', filename), "utf-8");  
}
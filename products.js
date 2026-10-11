import { readFileSync } from "node:fs";

// Путь строим от самого файла, чтобы сервер работал из любой папки
const dbUrl = new URL("./db.json", import.meta.url);
const db = JSON.parse(readFileSync(dbUrl, "utf-8"));

export const products = db.products;

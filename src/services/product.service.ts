import path from "node:path";
import fs from "node:fs";
import type { IProduct } from "../types/product";

const filePath = path.join(process.cwd(), "./src/database/db.json");

export const productService = () => {
  const products = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(products);
};

export const createProduct = (payload: IProduct[]) => {
  fs.writeFileSync(filePath, JSON.stringify(payload));
};

import { type DB } from '@/types/db';
import { type Product } from '@/types/product';
import { wait } from '@/utils/wait';
import fs from 'fs/promises';

export type CreateProductDataArgs = Omit<Product, 'id'>;

export async function createProductData(args: CreateProductDataArgs) {
  await wait(1000);
  const db = JSON.parse(await fs.readFile('db.json', 'utf-8')) as DB;

  const newProduct = {
    ...args,
    id: crypto.randomUUID(),
  };

  db.products.push(newProduct);

  await fs.writeFile('db.json', JSON.stringify(db, null, 2));

  return newProduct;
}

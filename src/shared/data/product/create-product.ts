import { type DB } from '@/shared/types/db';
import { type Product } from '@/shared/types/product';
import { wait } from '@/shared/utils/wait';
import fs from 'fs/promises';

export type CreateProductArgs = Omit<Product, 'id'>;

export async function createProduct(args: CreateProductArgs) {
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

import { type DB } from '@/types/db';
import { type Product } from '@/types/product';
import { wait } from '@/utils/wait';
import fs from 'fs/promises';

export type UpdateProductArgs = {
  id: string;
  values: Partial<Omit<Product, 'id'>>;
};

export async function updateProduct(args: UpdateProductArgs) {
  await wait(1000);
  const db = JSON.parse(await fs.readFile('db.json', 'utf-8')) as DB;

  const index = db.products.findIndex(product => product.id === args.id);

  if (index === -1) {
    throw new Error(`Product with id "${args.id}" not found`);
  }

  const updatedProduct = {
    ...args.values,
    id: args.id,
  } as Product;

  db.products[index] = updatedProduct;

  await fs.writeFile('db.json', JSON.stringify(db, null, 2));

  return updatedProduct;
}

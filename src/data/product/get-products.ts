import { type Product } from '@/types/product';
import { wait } from '@/utils/wait';
import { products } from '../../../db.json';

export async function getProducts() {
  await wait(1000);
  return products as Product[];
}

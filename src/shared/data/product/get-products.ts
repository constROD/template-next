import { type Product } from '@/shared/types/product';
import { wait } from '@/shared/utils/wait';
import { products } from '../../../../db.json';

export async function getProducts() {
  await wait(1000);
  return products as Product[];
}

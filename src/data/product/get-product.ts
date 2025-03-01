import { type Product } from '@/types/product';
import { wait } from '@/utils/wait';
import { products } from '../../../db.json';

export type GetProductDataArgs = {
  id: string;
};

export async function getProductData({ id }: GetProductDataArgs) {
  await wait(1000);
  return (products as Product[]).find(product => product.id === id);
}

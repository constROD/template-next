'use server';

import { createProduct } from '@/shared/data/product/create-product';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const addProductSchema = z.object({
  name: z.string().min(1),
  price: z.number().nonnegative().min(1),
});

export async function addProductAction(_: unknown, formData: FormData) {
  const formValues = Object.fromEntries(formData.entries()) as unknown as z.infer<
    typeof addProductSchema
  >;
  formValues.price = Number(formValues.price);
  const result = addProductSchema.safeParse(formValues);

  if (!result.success) return result.error.formErrors.fieldErrors;

  await createProduct(result.data);

  redirect('/products');
}

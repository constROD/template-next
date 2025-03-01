'use server';

import { updateProductData } from '@/data/product/update-product';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const updateProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).optional(),
  price: z.number().nonnegative().min(1).optional(),
});

export async function updateProductAction(_: unknown, formData: FormData) {
  const formValues = Object.fromEntries(formData.entries()) as unknown as z.infer<
    typeof updateProductSchema
  >;

  if (formValues.price) formValues.price = Number(formValues.price);

  const result = updateProductSchema.safeParse(formValues);

  if (!result.success) return result.error.formErrors.fieldErrors;

  const { id, ...updatedValues } = result.data;

  await updateProductData({
    id,
    values: updatedValues,
  });

  redirect('/products');
}

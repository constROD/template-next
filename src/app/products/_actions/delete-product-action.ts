'use server';

import { deleteProduct } from '@/data/product/delete-product';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const deleteProductSchema = z.object({
  id: z.string().uuid(),
});

export async function deleteProductAction(_: unknown, formData: FormData) {
  const formValues = Object.fromEntries(formData.entries()) as unknown as z.infer<
    typeof deleteProductSchema
  >;

  const result = deleteProductSchema.safeParse(formValues);

  if (!result.success) return result.error.formErrors.fieldErrors;

  await deleteProduct(result.data.id);

  redirect('/products');
}

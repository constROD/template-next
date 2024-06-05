'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { type Product } from '@/types/product';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { updateProductAction } from '../_actions/update-product-action';

export type EditProductFormProps = {
  product: Product;
  closeModal: () => void;
};

export function EditProductForm({ product, closeModal }: EditProductFormProps) {
  const [error, action] = useFormState(updateProductAction, {});

  useEffect(() => {
    if (!error) {
      closeModal();
    }
  }, [closeModal, error]);

  return (
    <form action={action} className="flex flex-col gap-2">
      <input type="hidden" name="id" value={product.id} />
      <Input
        aria-label="Name"
        label="Name"
        name="name"
        error={error?.name?.toString()}
        defaultValue={product.name}
      />
      <Input
        aria-label="Price"
        label="Price"
        name="price"
        type="number"
        error={error?.price?.toString()}
        defaultValue={product.price}
      />
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Updating...' : 'Update'}
    </Button>
  );
}

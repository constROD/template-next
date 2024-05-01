'use client';

import { Button } from '@/shared/components/ui/button';
import { type Product } from '@/shared/types/product';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { deleteProductAction } from '../_actions/delete-product-action';

export type DeleteProductFormProps = {
  product: Product;
  closeModal: () => void;
};

export function DeleteProductForm({ product, closeModal }: DeleteProductFormProps) {
  const [error, action] = useFormState(deleteProductAction, {});

  useEffect(() => {
    if (!error) {
      closeModal();
    }
  }, [closeModal, error]);

  return (
    <form action={action} className="flex flex-col gap-2">
      <input type="hidden" name="id" value={product.id} />
      <ActionButton closeModal={closeModal} />
    </form>
  );
}

function ActionButton({ closeModal }: { closeModal: () => void }) {
  const { pending } = useFormStatus();

  return (
    <div className="flex gap-2">
      <Button type="reset" onClick={closeModal} disabled={pending}>
        Cancel
      </Button>
      <Button variant="destructive" type="submit" disabled={pending}>
        {pending ? 'Deleting...' : 'Delete'}
      </Button>
    </div>
  );
}

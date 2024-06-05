'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { addProductAction } from '../_actions/add-product-action';

export function AddProductForm({ closeModal }: { closeModal: () => void }) {
  const [error, action] = useFormState(addProductAction, {});

  useEffect(() => {
    if (!error) {
      closeModal();
    }
  }, [closeModal, error]);

  return (
    <form action={action} className="flex flex-col gap-2">
      <Input aria-label="Name" label="Name" name="name" error={error?.name?.toString()} />
      <Input
        aria-label="Price"
        label="Price"
        name="price"
        type="number"
        error={error?.price?.toString()}
      />
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Adding...' : 'Add'}
    </Button>
  );
}

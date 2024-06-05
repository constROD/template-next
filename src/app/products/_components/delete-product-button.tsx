'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { type Product } from '@/types/product';
import { useState } from 'react';
import { DeleteProductForm } from './delete-product-form';

export type DeleteProductProps = {
  product: Product;
};

export function DeleteProductButton({ product }: DeleteProductProps) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete {product.name}?</DialogTitle>
        </DialogHeader>
        <DeleteProductForm product={product} closeModal={handleClose} />
      </DialogContent>
    </Dialog>
  );
}

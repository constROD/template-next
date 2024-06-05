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
import { EditProductForm } from './edit-product-form';

export type EditProductProps = {
  product: Product;
};

export function EditProductButton({ product }: EditProductProps) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <EditProductForm product={product} closeModal={handleClose} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

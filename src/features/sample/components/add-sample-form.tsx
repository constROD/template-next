'use client';

import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { useSampleStore } from '../../../shared/stores/use-sample-store';
import { createSampleAction } from '../actions/create-sample-action';

export const addSampleSchema = z.object({
  email: z.string().email().toLowerCase(),
  name: z.string().min(1),
  description: z.string().min(1),
});

export type AddSample = z.infer<typeof addSampleSchema>;

export function AddSampleForm() {
  const { register, handleSubmit, formState } = useForm<AddSample>({
    resolver: zodResolver(addSampleSchema),
  });
  const { data } = useSampleStore();

  // eslint-disable-next-line no-console
  console.log('Sample Store Data: ', data);

  const onSubmit: SubmitHandler<AddSample> = async data => {
    await createSampleAction({
      title: data.email,
      body: data.description,
      userId: 1,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        aria-label="Email"
        label="Email"
        error={formState.errors.email?.message}
        {...register('email')}
      />
      <Input
        aria-label="Name"
        label="Name"
        error={formState.errors.name?.message}
        {...register('name')}
      />
      <Input
        aria-label="Description"
        label="Description"
        error={formState.errors.description?.message}
        {...register('description')}
      />
      <Button type="submit">Add Sample</Button>
    </form>
  );
}

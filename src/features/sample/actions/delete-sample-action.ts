'use server';

import { deleteSampleData } from '@/shared/data/delete-sample';
import { redirect } from 'next/navigation';

export async function deleteSampleAction(formData: FormData) {
  const id = parseInt(formData.get('id') as string) as number;
  // eslint-disable-next-line no-console
  console.log('id', id);
  const deletedSample = await deleteSampleData({ id });
  // eslint-disable-next-line no-console
  console.log(deletedSample);

  redirect('/rsc-and-server-action');
}

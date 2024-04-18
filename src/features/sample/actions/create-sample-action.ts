'use server';

import { createSampleData, type CreateSampleDataArgs } from '@/shared/data/create-sample';

export async function createSampleAction(data: CreateSampleDataArgs) {
  const createdSample = await createSampleData(data);
  // eslint-disable-next-line no-console
  console.log(createdSample);
}

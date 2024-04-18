import { type CreateSampleDataArgs } from '@/shared/data/create-sample';
import { faker } from '@faker-js/faker';
import { describe, expect, it, vi } from 'vitest';
import { createSampleAction } from './create-sample-action';

describe('createSampleAction', () => {
  it('should log data', async () => {
    const data: CreateSampleDataArgs = {
      title: faker.person.jobTitle(),
      body: faker.lorem.paragraph(),
      userId: faker.number.int(1),
    };
    const mockConsoleLog = vi.spyOn(console, 'log');

    await createSampleAction(data);

    expect(mockConsoleLog).toHaveBeenCalledWith({
      ...data,
      id: 101 /* Default Return of JSON API */,
    });
  });
});

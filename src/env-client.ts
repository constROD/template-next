import { z } from 'zod';
import { STAGES } from './constants/env';

const envClientSchema = z.object({
  STAGE: z.nativeEnum(STAGES).default(STAGES.Dev),
});

/**
 * Accessible in the server and client environment.
 */
export const envClientConfig = envClientSchema.parse({
  STAGE: process.env.NEXT_PUBLIC_STAGE,
});

export type EnvClientConfig = z.infer<typeof envClientSchema>;

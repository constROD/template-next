import { z } from 'zod';

const envServerSchema = z.object({
  DB_URL: z.string(),
});

/**
 * Accessible in the server environment only.
 */
export const envServerConfig = envServerSchema.parse({
  DB_URL: process.env.DB_URL,
});

export type EnvServerConfig = z.infer<typeof envServerSchema>;

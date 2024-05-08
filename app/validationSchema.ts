import { z } from 'zod';

export const createCaseSchema = z.object({
  title: z.string().min(1, 'Title is required').max(250),
  description: z.string().min(1, 'Description is required'),
});

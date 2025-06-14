import { z } from 'zod';

/**
 * BONUS: Implement zod schema for model validation
 */
// export interface IProject {
//   id: string;
//   name: string;
//   description: string;
// }

// export interface RequestBody {
//   name: string;
//   description: string;
// }

// Zod schema for IProject
export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
});

// Zod schema for RequestBody
export const RequestBodySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
});

// Infer TypeScript types from Zod schemas
export type IProject = z.infer<typeof ProjectSchema>;
export type RequestBody = z.infer<typeof RequestBodySchema>;
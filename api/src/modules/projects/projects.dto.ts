import z from "zod";

const projectBaseSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  solvedProblem: z.string(),
  githubUrl: z.url(),
  previewUrl: z.url().nullable()
});

const projectCreateSchema = projectBaseSchema.omit({
  id: true
});

const projectUpdateSchema = projectCreateSchema.partial()

export type projectBaseDTO = z.infer<typeof projectBaseSchema>
export type projectCreateDTO = z.infer<typeof projectCreateSchema>
export type projectUpdateDTO = z.infer<typeof projectUpdateSchema>

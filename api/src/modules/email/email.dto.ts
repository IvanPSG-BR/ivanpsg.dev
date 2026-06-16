import z from "zod";

const emailBaseSchema = z.object({
  senderName: z.string(),
  senderEmail: z.email(),
  messageSubject: z.string(),
  messageBody: z.string()
});

export type emailBaseDTO = z.infer<typeof emailBaseSchema>

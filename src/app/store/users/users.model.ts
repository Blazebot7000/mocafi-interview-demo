import { z } from "zod";

export const userSchema = z.object({
  id: z.number().nullish(),
  name: z.string(),
  email: z.string().email(),
  gender: z.enum(["male", "female"]),
  status: z.enum(["active", "inactive"]),
});

export type User = z.infer<typeof userSchema>;

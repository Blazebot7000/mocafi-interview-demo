import { z } from "zod";

export const userProfileSchema = z.object({
  email: z.string(),
  password: z.string()
});

export type UserProfile = z.infer<typeof userProfileSchema>;

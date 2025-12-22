import { z } from "zod";

export const signupSchema = z.object({
    
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100),
});

export const signinSchema = z.object({
  username: z.string(),
  password: z.string(),
});

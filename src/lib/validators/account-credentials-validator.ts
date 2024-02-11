import { z } from "zod";

export const AuthCredentialsValitor = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least eight characters long' }),
});

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValitor>;
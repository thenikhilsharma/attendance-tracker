import {z} from "zod";

export const usernameValidation = z
    .string()
    .min(2, "Username must be greater than 2 characters")
    .max(20)
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not have any special characters")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(4, {message: "Password must be greater than 4 characters"}),
})
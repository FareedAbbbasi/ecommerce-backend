import { z } from "zod";

export const registerUserSchma = z.object({
    name: z
    .string()
    .min(3, {message: "Name must me at least 3 character along"})
    .max(100, {message: "Name is no more 100 characters"})
    .regex(/^[A-Za-z\s]+$/),
    email: z
    .string()
    .min(5)
    .max(100, {message: "email must me no more than 100 character"})
    .email({message: "please enter the valid email address"}),
    password: z
    .string()
    .min(8, {message: "Password must me at least 8 character along"})
    .max(100, {message: "please enter the valid email address"})
})

// Login validation schema
 export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Password is required")
  });



  
  

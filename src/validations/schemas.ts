import { z } from "zod";

export const registerUserSchma = z.object({
    name: z
    .string({
      required_error: "Full name is requird", 
      invalid_type_error: "Full name must be TEXT"

    })
    .min(3, {message: "Name must me at least 3 character along"})
    .max(100, {message: "Name is no more 100 characters"})
    .regex(/^[A-Za-z\s]+$/),
    email: z
    .string({
      required_error: "Email is required", 
      invalid_type_error: "Email must be a text value"
    })
    .min(5)
    .max(100, {message: "email must me no more than 100 character"})
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {message: "please enter the valid email address"}),
    password: z
    .string()
    .min(8, {message: "Password must me at least 8 character along"})
    .max(100, {message: "please enter the valid email address"})
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
      {message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",})
})

// Login validation schema
 export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Password is required")

  });



  
  

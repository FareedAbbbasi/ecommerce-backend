import { z } from "zod";
import dotenv from 'dotenv';
dotenv.config();

const portSchema = z.coerce.number().min(1).max(65535).default(4000)
  
export const PORT = portSchema.parse(process.env.PORT)


import { z } from "zod";

export const StudentSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().trim().min(1).max(100),
  age: z.number().int().min(1).max(120),
  email: z.email(),
  phone: z.string().trim().min(7).max(20),
  address: z.string().trim().min(1).max(250),
  grade: z.string().trim().min(1).max(10),
  subjects: z.array(z.string().trim().min(1)).min(1),
  isActive: z.boolean(),
});

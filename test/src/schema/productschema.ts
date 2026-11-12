import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().trim().min(1).max(100),
  description: z.string().trim().min(1).max(500),
  price: z.number().finite().nonnegative(),
  category: z.string().trim().min(1).max(50),
  stock: z.number().int().nonnegative(),
  isActive: z.boolean(),
});

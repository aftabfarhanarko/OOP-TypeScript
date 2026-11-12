import { z } from "zod";
import { ProductSchema } from "../schema/productschema";

export type Product = z.infer<typeof ProductSchema>;

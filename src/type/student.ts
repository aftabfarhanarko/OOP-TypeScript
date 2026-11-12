import { z } from "zod";
import { StudentSchema } from "../schema/studentschema";

export type student = z.infer<typeof StudentSchema>;

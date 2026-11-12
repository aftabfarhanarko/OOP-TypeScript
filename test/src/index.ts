import express, { Response, Request } from "express";
import { Product } from "./type/producat";
import { ProductSchema } from "./schema/productschema";
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello  qwefweq 22wggw2453245345 ");
});

app.post("/products", (req: Request, res: Response) => {
  const result = ProductSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: "Invalid product data",
    });
  }

  const product: Product = result.data;

  return res.status(201).json({
    success: true,
    message: "Product created successfully",
    data: product,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

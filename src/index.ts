import { student } from "./type/student";
import { StudentSchema } from "./schema/studentschema";
import express, { Request, Response } from "express";
const app = express();

const port = 3000;
app.use(express.json());

// Custom Object
const student_data: student = {
  id: 1,
  name: "Arko",
  age: 23,
  email: "arko@gmail.com",
  phone: "01700000000",
  address: "Dhaka, Bangladesh",
  grade: "A+",
  subjects: ["Math", "English", "Computer Science"],
  isActive: true,
};
app.get("/", (req: Request, res: Response) => {
  res.status(200).send(student_data);
});

// POST Request - Create Student
app.post("/students", (req: Request, res: Response) => {
  const result = StudentSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: "Invalid student data",
    });
  }

  const student_data: student = result.data;

  res.status(201).json({
    success: true,
    message: "Student created successfully",
    data: student_data,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

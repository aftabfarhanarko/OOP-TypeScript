# OOP TypeScript

A small TypeScript and Express project for practicing typed backend development. It includes a student model inferred from a Zod schema and an API endpoint that validates student data.

## Requirements

- Node.js
- npm

## Getting started

Install the dependencies:

```bash
npm install
```

Start the development server with automatic restarts when files in `src/` change:

```bash
npm run dev
```

The server listens at <http://localhost:3000>.

## Production

Compile the TypeScript source into `dist/`:

```bash
npm run build
```

Run the compiled server:

```bash
npm start
```

## API

### `GET /`

Returns the example student:

```json
{
  "id": 1,
  "name": "Arko",
  "age": 23,
  "email": "arko@gmail.com",
  "phone": "01700000000",
  "address": "Dhaka, Bangladesh",
  "grade": "A+",
  "subjects": ["Math", "English", "Computer Science"],
  "isActive": true
}
```

### `POST /students`

Send a JSON object containing `id`, `name`, `age`, `email`, `phone`, `address`, `grade`, `subjects`, and `isActive`:

```bash
curl -X POST http://localhost:3000/students \
  -H 'Content-Type: application/json' \
  -d '{
    "id": 2,
    "name": "Samira",
    "age": 20,
    "email": "samira@example.com",
    "phone": "01712345678",
    "address": "Dhaka, Bangladesh",
    "grade": "A",
    "subjects": ["Math", "Physics"],
    "isActive": true
  }'
```

Valid input returns `201 Created` with the validated student data. Invalid input returns `400 Bad Request`. The current endpoint validates and returns the submitted student; it does not save records to a database.

## Project structure

```text
src/
├── index.ts                 # Express app and routes
├── schema/
│   └── studentschema.ts     # Zod student validation schema
└── type/
    └── student.ts           # Type inferred from the schema
```

## Useful commands

| Command | Description |
| --- | --- |
| `npm run dev` | Run the TypeScript server with nodemon |
| `npm run build` | Clean and compile into `dist/` |
| `npm start` | Run the compiled production server |
| `npm run clean` | Remove the compiled `dist/` directory |

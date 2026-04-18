# Properties CRUD

A full CRUD for properties (real estate items) built with **Next.js (App Router)**, **MongoDB** and **Mongoose**.
The API is consumed from the frontend through **Axios** services used in a Dashboard view.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- MongoDB + Mongoose
- Axios

## Project Structure

```
properties-crud/
├── .env                          # MongoDB connection string
├── package.json
├── tsconfig.json
├── next.config.js
└── src/
    ├── lib/
    │   └── db.ts                 # MongoDB connection (cached)
    ├── database/
    │   └── models/
    │       └── Property.ts       # Mongoose model
    ├── services/
    │   └── properties.ts         # Axios services
    └── app/
        ├── layout.tsx
        ├── page.tsx              # Home
        ├── api/
        │   └── properties/
        │       ├── route.ts      # GET, POST
        │       └── [id]/
        │           └── route.ts  # PUT, DELETE
        └── dashboard/
            └── properties/
                └── page.tsx      # Dashboard view
```

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root with your MongoDB URI:

   ```
   MONGODB_URI=mongodb://localhost:27017/properties-db
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open the dashboard at:

   ```
   http://localhost:3000/dashboard/properties
   ```

## API Endpoints

| Method | Endpoint                 | Description            |
| ------ | ------------------------ | ---------------------- |
| GET    | `/api/properties`        | List all properties    |
| POST   | `/api/properties`        | Create a new property  |
| PUT    | `/api/properties/[id]`   | Update a property      |
| DELETE | `/api/properties/[id]`   | Delete a property      |

## Property Schema

| Field | Type   | Required | Default |
| ----- | ------ | -------- | ------- |
| name  | String | Yes      | —       |
| value | Number | Yes      | —       |
| img   | String | No       | `""`    |

## Axios Services (`src/services/properties.ts`)

- `getProperties()` — fetch all properties
- `postProperty(property)` — create a new property
- `updateProperty(id, property)` — update a property by id
- `deleteProperty(id)` — delete a property by id

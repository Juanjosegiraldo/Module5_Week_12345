# Week 2 — Modular login, CRUD, and decorators (React + TypeScript)

## How to run

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Open the URL shown by Vite (default `http://localhost:5173`)

## How to test

### Login (RF_01, CA_04–CA_06)

- Valid user: `admin` / `123` (also `juan` / `password` in the mock data).
- After a successful login you will see a success message; after a short delay the app navigates to `/dashboard`.
- If you open `/dashboard` without signing in, you are redirected to the login screen.
- **Sign out** clears the session and returns to login.

### CRUD and simulated HTTP logs (RF_03, CA_07–CA_10)

- Open **browser developer tools → Console**.
- On load, a demo runs that calls `list`, `findByName`, `create`, `update`, and `remove`, printing messages such as `GET /users`, `POST /users`, etc.

### Decorator on `create` (RF_04, CA_11–CA_14)

- In the console, find the `[UserStore demo]` line that logs the created user (Spanish message mentioning `role` and `createdAt`). Confirm the object has `role: "user"` and `createdAt` (timestamp) from the `ExtendUser` decorator, while the base `create` logic in `UserStore` stays unchanged.

## Production build

```bash
npm run build
npm run preview
```

The `build` script runs the type checker (`tsc`) and produces static assets with Vite.

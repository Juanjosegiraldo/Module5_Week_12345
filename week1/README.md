# Ecommerce Lite

A simple React + TypeScript project built as a learning exercise. It covers basic project setup, TypeScript interfaces, mock data, and rendering components.

## What this project does

- Defines `Product` and `User` interfaces with strict TypeScript typing
- Includes mock data with 15 products and 5 users
- Renders a product grid and user list using `.map()`
- Has a tab to switch between products and users

## Project structure

```
.
├── .gitignore
├── README.md
└── src/
    ├── App.tsx
    ├── App.css
    ├── components/
    │   ├── ProductCard.tsx
    │   ├── ProductList.tsx
    │   └── UserCard.tsx
    ├── data/
    │   └── data.ts          # 15 products + 5 users
    └── interfaces/
        ├── Product.ts       # Product, Dimensions
        └── User.ts          # User, Address, UserRole
```

## How to run

1. Clone the repo and go into the folder:

```bash
git clone <repo-url>
cd ecommerce-lite
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will open at `http://localhost:3000`.

## How to build for production

```bash
npm run build
```

---

Made with React + TypeScript as part of a frontend learning path.

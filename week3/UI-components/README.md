# UI Components Project - M5.4W3

This project implements reusable UI components using **React** and **TypeScript**.

## Project Structure
- `src/components`: Contains modular components (Button, Badge, Card).
- `src/data`: Contains data models and mock constants.
- `src/services`: Handles data logic and simulation.

## How to use the components

### Button
Required prop: `text`.
Optional props: `variant`, `size`, `onClick`, `loading`, `disabled`.

### Badge
Required prop: `label`.
Optional props: `status`, `icon`.

### Card
Required props: `title`, `type`.
Integrated with Badge and supports a `footer` for Button actions.

## Setup
1. Move to file project `cd UI-components`
2. Run `npm install`
3. Run `npm dev`
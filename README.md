
# React Phone Catalog

## [Demolink](https://vladokvl.github.io/react_phoneCatalog/)

A compact demo phone catalog built with React, TypeScript, and Vite. It showcases product listings, product detail pages, a shopping cart and favourites using React Context, responsive layouts, and SCSS-based styling.

## Features

- Product listings (phones, tablets, accessories)
- Product detail pages with images and specifications
- Cart and favourites (React Context)
- Product carousel for showcasing items
- Responsive SCSS-based styling

## Tech stack

- React 18
- TypeScript
- Vite
- Sass (SCSS)
- Bulma


Quick start
-----------
1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Create a production build:

```bash
npm run build
```

Available scripts
-----------------
- `npm start` — run the dev server
- `npm run build` — build for production
- `npm run format` — format code with Prettier
- `npm run lint` — run linters and style checks
- `npm run style-format` — format SCSS files

Project structure
-----------------
- `public/` — static assets and mock API datasets
- `src/` — application source code
  - `api/` — API client and local data
  - `components/` — UI components (e.g. ProductCard, ProductCarousel)
  - `context/` — `CartContext` and `FavouritesContext`
  - `pages/` — route pages (Home, Cart, ProductDetails, etc.)
  - `styles/` — SCSS variables and utilities
  - `types/` — TypeScript types
  - `utils/` — helper utilities





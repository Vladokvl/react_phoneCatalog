React Phone Catalog

Simple React + TypeScript phone catalog demo built with Vite.

Features
- Product listing pages (phones, tablets, accessories)
- Product detail pages
- Cart and favourites contexts with basic state management
- Product carousel using Swiper
- Responsive layout and SCSS-based styles

Requirements
- Node.js 20+ (recommended)
- npm

Setup
1. Install dependencies:

```bash
npm install
```

2. (Optional) If you see errors about `swiper` not found, install it:

```bash
npm install swiper
```

3. Start dev server:

```bash
npm start
```

4. Build for production:

```bash
npm run build
```

Project Structure
- `src/` — application source
  - `api/` — API client and data loaders
  - `components/` — React components (ProductCard, ProductCarousel, etc.)
  - `context/` — `CartContext` and `FavouritesContext`
  - `pages/` — route pages (Home, Cart, ProductDetails, etc.)
  - `styles/` — SCSS utilities and variables

Notes
- Dev server error "Failed to resolve import 'swiper/react'" means `swiper` is not installed; run `npm install swiper`.
- The project uses Mate Academy starter scripts (`mate-scripts`) for running and building.

What was implemented
- Catalog UI with product cards and carousel
- Cart and favourites contexts for managing user selections
- Swiper integration for the product carousel (requires `swiper` package)

If you want, I can install `swiper` and start the dev server now.
# React TypeScript Starter Pack

To use this template click `Use this template`

### Available Scripts

`Deploy` - available to deploy your application to gh-pages, to deploy the project, change the second line of code in package.json, specifically the homepage value, from "." to the repository name

`SCSS Preprocessor` - available to write your styles with modern style language

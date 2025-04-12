# Product Finder

A modern web application for searching and comparing products across different online stores, built with React 19, TypeScript, and PostgreSQL.

## Overview

Product Finder allows users to search for products by name, barcode, or specifications and view availability across different stores with pricing information. The application helps consumers make informed purchasing decisions by comparing prices and availability in one convenient interface.

## Technologies

- **Frontend**: React 19, TypeScript, CSS Modules
- **Backend**: Hono API server
- **Database**: PostgreSQL with Drizzle ORM
- **Build Tools**: Vite, TSX
- **Deployment**: Vercel-ready configuration

## Features

- **Product Search**: Search products by keyword, barcode, brand, or manufacturer
- **Advanced Filtering**: Filter results with multiple criteria simultaneously
- **Store Comparison**: View product availability and pricing across multiple retailers
- **Responsive Design**: Clean card-based interface that works on all device sizes
- **Type Safety**: Full TypeScript implementation for robust code quality
- **Database Migration**: Schema version control with Drizzle ORM

## Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL database

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with your database connection:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/product_finder"
   DIRECT_URL="postgresql://username:password@localhost:5432/product_finder"
   ```

### Development

Run the development server:

```
npm run dev
```

In a separate terminal, start the API server:

```
npm run server
```

### Database Management

Generate migrations after schema changes:

```
npm run drizzle-generate
```

Apply migrations:

```
npm run migrate
```

Seed the database (if available):

```
npm run seed
```

## Project Structure

- `src/` - Frontend application code
  - `components/` - React components
  - `db/` - Database connection and schema
  - `types.ts` - TypeScript type definitions
- `api/` - Hono API endpoints
- `drizzle/` - Database migration files

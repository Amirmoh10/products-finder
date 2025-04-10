import { Hono } from "hono";
import { handle } from "hono/vercel";
import { db } from "../src/db";
import { product, store } from "../src/db/schema";
import { eq, or, and, ilike } from "drizzle-orm";

const app = new Hono().basePath("/api");

app.get("/products", async (c) => {
  const query = c.req.query();
  const queryBuilder = db
    .select()
    .from(product)
    .innerJoin(store, eq(product.id, store.productId));

  const conditions = [];

  if (query.search) {
    conditions.push(
      or(
        ilike(product.productName, `%${query.search}%`),
        ilike(product.description, `%${query.search}%`),
        ilike(product.brand, `%${query.search}%`)
      )
    );
  }

  if (query.brand) {
    conditions.push(ilike(product.brand, `%${query.brand}%`));
  }

  if (query.barcode) {
    conditions.push(eq(product.barcodeNumber, query.barcode));
  }

  if (query.productName) {
    conditions.push(ilike(product.productName, `%${query.productName}%`));
  }

  try {
    const result = await queryBuilder.where(and(...conditions));

    return c.json(result);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to fetch data" }, 500);
  }
});

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;

import { Hono } from "hono";
import { handle } from "hono/vercel";
import { db } from "../src/db";
import { product } from "../src/db/schema";
import { eq, or, and, ilike } from "drizzle-orm";

export const runtime = "nodejs";

const app = new Hono();

app.get("/api/products", async (c) => {
  const query = c.req.query();
  const queryBuilder = db.select().from(product);

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

export const GET = handle(app);
export const POST = handle(app);

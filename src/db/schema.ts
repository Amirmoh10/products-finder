import { pgTable, text, timestamp, foreignKey } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const product = pgTable("Product", {
  id: text().primaryKey().notNull(),
  barcodeNumber: text("barcode_number"),
  barcodeType: text("barcode_type"),
  barcodeFormats: text("barcode_formats"),
  asin: text(),
  model: text(),
  productName: text("product_name").notNull(),
  category: text(),
  manufacturer: text(),
  brand: text(),
  color: text(),
  description: text().notNull(),
  features: text().array(),
  images: text().array(),
  createdAt: timestamp({ precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const store = pgTable(
  "Store",
  {
    id: text().primaryKey().notNull(),
    storeName: text("store_name").notNull(),
    storePrice: text("store_price").notNull(),
    productUrl: text("product_url").notNull(),
    currencyCode: text("currency_code").notNull(),
    currencySymbol: text("currency_symbol").notNull(),
    productId: text().notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.productId],
      foreignColumns: [product.id],
      name: "Store_productId_fkey",
    })
      .onUpdate("cascade")
      .onDelete("restrict"),
  ]
);

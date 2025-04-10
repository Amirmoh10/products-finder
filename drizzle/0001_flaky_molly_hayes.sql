ALTER TABLE "Product" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "Store" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "Product" ADD COLUMN "manufacturer" text;
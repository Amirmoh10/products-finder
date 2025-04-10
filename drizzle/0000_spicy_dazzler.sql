-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "Product" (
	"id" text PRIMARY KEY NOT NULL,
	"barcode_number" text,
	"barcode_type" text,
	"barcode_formats" text,
	"asin" text,
	"model" text,
	"product_name" text NOT NULL,
	"category" text,
	"brand" text,
	"color" text,
	"description" text NOT NULL,
	"features" text[],
	"images" text[],
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
ALTER TABLE "Product" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "Store" (
	"id" text PRIMARY KEY NOT NULL,
	"store_name" text NOT NULL,
	"store_price" text NOT NULL,
	"product_url" text NOT NULL,
	"currency_code" text NOT NULL,
	"currency_symbol" text NOT NULL,
	"productId" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "Store" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "Store" ADD CONSTRAINT "Store_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE restrict ON UPDATE cascade;
*/
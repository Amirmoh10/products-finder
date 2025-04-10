import { relations } from "drizzle-orm/relations";
import { product, store } from "./schema";

export const storeRelations = relations(store, ({one}) => ({
	product: one(product, {
		fields: [store.productId],
		references: [product.id]
	}),
}));

export const productRelations = relations(product, ({many}) => ({
	stores: many(store),
}));
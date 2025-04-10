type Store = {
  store_name: string;
  store_price: string;
  product_url: string;
  currency_code: string;
  currency_symbol: string;
};

export type Product = {
  barcode_number: string;
  barcode_type: string;
  barcode_formats: string;
  asin: string;
  model: string;
  product_name: string;
  category: string;
  brand: string;
  color: string;
  description: string;
  features: string[];
  images: string[];
  stores: Store[];
};

export enum ActionKind {
  LOADING_SET = "LOADING_SET",
  ERROR_SET = "ERROR_SET",
  PRODUCTS_FETCHED = "PRODUCTS_FETCHED",
  SEARCH_CHANGED = "SEARCH_CHANGED",
  PRODUCT_SELECTED = "PRODUCT_SELECTED",
  ADVANCED_SEARCH_SET = "ADVANCED_SEARCH_SET",
}

export type Action = {
  type: ActionKind;
  payload?: any;
};

export type initialStateType = {
  products: Product[];
  request: string;
  search: string;
  selectedProduct: Product | null;
  isAdvancedSearch: boolean;
};

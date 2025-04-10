type Store = {
  storeName: string;
  storePrice: string;
  productUrl: string;
  currencyCode: string;
  currencySymbol: string;
};

export type Product = {
  barcodeNumber: string;
  barcodeType: string;
  barcodeFormats: string;
  asin: string;
  model: string;
  productName: string;
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

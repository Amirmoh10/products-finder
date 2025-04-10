import Card from "./Card";
import type { Product } from "../types";
import ProductComponent from "./ProductComponent";
import { REQUEST } from "../constants";

type ProductsListProps = {
  request: string;
  products: Product[];
  onProductClick: (product: Product) => void;
};

function ProductsList({
  request,
  products,
  onProductClick,
}: ProductsListProps) {
  if (request === REQUEST.DEFAULT) {
    return <Card>Search for a keyword or use the filters to see results</Card>;
  }

  if (request === REQUEST.LOADING) {
    return <Card>Fetching products...</Card>;
  }

  if (request === REQUEST.ERROR) {
    return (
      <Card>
        There was an error fetching the products, please try another search.
      </Card>
    );
  }

  if (products.length === 0) {
    return <Card>There are no results for your search.</Card>;
  }

  return products.map((product, index) => (
    <ProductComponent
      key={index}
      product={product}
      onClick={() => onProductClick(product)}
    />
  ));
}

export default ProductsList;

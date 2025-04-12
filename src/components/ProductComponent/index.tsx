import Card from "../Card";
import Stack from "../Stack";
import style from "./Product.module.css";
import { Product } from "../../db/schema";

type PropertyProps = {
  propName: string;
  propValue: string | null;
};

type ProductProps = {
  product: Product;
  onClick: () => void;
};

function Property({ propName, propValue }: PropertyProps) {
  return (
    <div>
      <strong>{`${propName}:`}</strong>{" "}
      <span>{!propValue ? "No value set for this product." : propValue}</span>
    </div>
  );
}

function ProductComponent({ product, onClick }: ProductProps) {
  return (
    <div className={style.product} onClick={onClick}>
      <Card>
        <Stack gap={10}>
          <h1>{product.productName}</h1>
          <Property propName={"Barcode"} propValue={product.barcodeNumber} />
          <Property propName={"Brand"} propValue={product.brand} />
          <Property propName={"Color"} propValue={product.color} />
          <Property propName={"Description"} propValue={product.description} />
        </Stack>
      </Card>
    </div>
  );
}

export default ProductComponent;

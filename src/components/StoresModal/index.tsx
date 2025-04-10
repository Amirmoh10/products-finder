import { Product } from "../../types";
import Modal from "../Modal";

import style from "./StoresModal.module.css";

type StoresModalProps = {
  product: Product;
  onClose: () => void;
};

function StoresModal({ product, onClose }: StoresModalProps) {
  return (
    <Modal
      title={`${product.product_name}: Stores availability`}
      onClose={onClose}
    >
      {product.stores.length > 0
        ? product.stores.map(
            ({ store_name, store_price, product_url }, index) => (
              <div className={style.store} key={index}>
                <a href={product_url} target="_blank">
                  {store_name}
                </a>
                : <span>${store_price}</span>
              </div>
            )
          )
        : "No stores availability found."}
    </Modal>
  );
}

export default StoresModal;

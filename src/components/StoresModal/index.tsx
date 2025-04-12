import Modal from "../Modal";
import { Product } from "../../db/schema";
import { Store } from "../../db/schema";

import style from "./StoresModal.module.css";

type ProductWithStores = Product & {
  stores: Store[];
};

type StoresModalProps = {
  product: ProductWithStores;
  onClose: () => void;
};

function StoresModal({ product, onClose }: StoresModalProps) {
  return (
    <Modal
      title={`${product.productName}: Stores availability`}
      onClose={onClose}
    >
      {product.stores.length > 0
        ? product.stores.map(({ storeName, storePrice, productUrl }, index) => (
            <div className={style.store} key={index}>
              <a href={productUrl} target="_blank">
                {storeName}
              </a>
              <span>${storePrice}</span>
            </div>
          ))
        : "No stores availability found."}
    </Modal>
  );
}

export default StoresModal;

import style from "./AdvancedSearchModal.module.css";
import { useState } from "react";
import Modal from "../Modal";
import Divider from "../Divider";
import Stack from "../Stack";
import Button from "../Button";
import Input from "../Input";

type AdvancedSearchModalProps = {
  onSubmit: (filter: Record<string, string>) => void;
  onClose: () => void;
};
function AdvancedSearchModal({ onSubmit, onClose }: AdvancedSearchModalProps) {
  const [filter, setFilter] = useState({
    search: "",
    brand: "",
    barcode: "",
    productName: "",
    manufacturer: "",
  });

  const isFilterEmpty =
    Object.values(filter).filter((value) => value.length > 0).length === 0;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    return setFilter({ ...filter, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(filter);
    onClose();
  }

  return (
    <Modal title={"Advanced search"} onClose={onClose}>
      <form onSubmit={handleSubmit} className={style.form}>
        <Stack gap={16}>
          <Input
            placeholder="Search"
            fullWidth
            onChange={handleChange}
            name="search"
            value={filter.search}
            withBorder={true}
          />
          <Input
            placeholder="Brand"
            fullWidth
            onChange={handleChange}
            name="brand"
            value={filter.brand}
            withBorder={true}
          />
          <Input
            placeholder="Enter a Barcode"
            fullWidth
            onChange={handleChange}
            name="barcode"
            value={filter.barcode}
            withBorder={true}
          />

          <Input
            placeholder="Product Name"
            fullWidth
            onChange={handleChange}
            name="productName"
            value={filter.productName}
            withBorder={true}
          />
          <Input
            placeholder="Manufacturer"
            fullWidth
            onChange={handleChange}
            name="manufacturer"
            value={filter.manufacturer}
            withBorder={true}
          />
          <Divider />
          <Button type="submit" disabled={isFilterEmpty}>
            Search
          </Button>
        </Stack>
      </form>
    </Modal>
  );
}

export default AdvancedSearchModal;

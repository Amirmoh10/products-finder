import ReactDOM from "react-dom";

import Divider from "../Divider";
import style from "./Modal.module.css";
import Stack from "../Stack";
import { X } from "lucide-react";

type ModalProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

function Modal({ title, children, onClose }: ModalProps) {
  return ReactDOM.createPortal(
    <div className={style.modalContainer}>
      <div className={style.modal}>
        <Stack gap={16}>
          <div className={style.modalHeader}>
            <X className={style.icon} onClick={onClose} />
            <span className={style.productTitle}>{title}</span>
          </div>
          <Divider />
          {children}
        </Stack>
      </div>
    </div>,
    getPortalContainer()
  );
}

function getPortalContainer() {
  const id = "NOON_PORTAL";
  let element = document.getElementById(id);

  if (element) {
    return element;
  }

  element = document.createElement("div");
  element.id = id;
  document.body.appendChild(element);
  return element;
}

export default Modal;

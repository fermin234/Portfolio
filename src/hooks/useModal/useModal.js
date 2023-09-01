import { useState } from "react";

export default function useModal(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return { isOpen, closeModal, openModal };
}

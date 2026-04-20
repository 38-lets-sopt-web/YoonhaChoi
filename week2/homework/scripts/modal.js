import { formatAmount } from "../utils/format-amount.js";

export const openModal = (modalElement) => {
  if (!modalElement) return;
  modalElement.showModal();
};

export const closeModal = (modalElement) => {
  if (!modalElement) return;
  modalElement.close();
};

export const initModalEvents = (modalElement) => {
  if (!modalElement) return;

  modalElement.addEventListener("click", (e) => {
    if (e.target === modalElement) {
      closeModal(modalElement);
    }
  });

  const closeBtn = modalElement.querySelector(".modal-header__close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => closeModal(modalElement));
  }
};

export const renderDetailModal = (item, modalElement) => {
  if (!item || !modalElement) return;

  const { title, category, payment, date, amount } = item;
  const { amountColorClass, displayAmount } = formatAmount(amount);

  modalElement.querySelector("#detail-title").textContent = title;
  modalElement.querySelector("#detail-date").textContent = date;
  modalElement.querySelector("#detail-category").textContent = category;
  modalElement.querySelector("#detail-payment").textContent = payment;

  const amountSpan = modalElement.querySelector("#detail-amount");
  amountSpan.textContent = `${displayAmount}원`;
  amountSpan.className = `modal__info-value ${amountColorClass}`;
};

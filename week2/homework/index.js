import { expenses } from "./mock/expense-data.js";
import { renderTable } from "./scripts/render-table.js";
import {
  renderDetailModal,
  openModal,
  initModalEvents,
} from "./scripts/modal.js";

const tbody = document.querySelector(".section-table__tbody");
const modalDetail = document.querySelector("#modal-detail");

const storedData = localStorage.getItem("expenseData");
const data = storedData ? JSON.parse(storedData) : expenses;
renderTable(data, tbody);

initModalEvents(modalDetail);

tbody.addEventListener("click", (e) => {
  if (e.target.type === "checkbox") return;
  const clickedRow = e.target.closest("tr");

  if (clickedRow) {
    const id = clickedRow.querySelector(".section-table__checkbox").dataset.id;

    const selectedItem = data.find((item) => item.id === Number(id));

    if (selectedItem) {
      renderDetailModal(selectedItem, modalDetail);

      openModal(modalDetail);
    }
  }
});

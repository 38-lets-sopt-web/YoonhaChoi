import { expenses } from "./mock/expense-data.js";
import { sortDataByDate } from "./utils/filter.js";
import { renderTable } from "./scripts/render-table.js";
import {
  renderDetailModal,
  openModal,
  initModalEvents,
} from "./scripts/modal.js";

const tbody = document.querySelector(".section-table__tbody");
const modalDetail = document.querySelector("#modal-detail");
const sortSelect = document.querySelector("#sort-order");

const storedData = localStorage.getItem("expenseData");
const data = storedData ? JSON.parse(storedData) : expenses;
const updateUI = () => {
  const order = sortSelect.value;
  const sortedData = sortDataByDate(data, order);
  renderTable(sortedData, tbody);
};

updateUI();
initModalEvents(modalDetail);

sortSelect.addEventListener("change", updateUI);

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

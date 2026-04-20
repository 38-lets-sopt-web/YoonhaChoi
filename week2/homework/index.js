import { expenses } from "./mock/expense-data.js";
import { sortDataByDate } from "./utils/filter.js";
import { renderTable } from "./scripts/render-table.js";
import {
  renderDetailModal,
  openModal,
  initModalEvents,
} from "./scripts/modal.js";
import { toggleAllCheckboxes, getRemainingData } from "./utils/checkbox.js";

const tbody = document.querySelector(".section-table__tbody");
const modalDetail = document.querySelector("#modal-detail");
const sortSelect = document.querySelector("#sort-order");
const checkAll = document.querySelector(
  ".section-table__thead .section-table__checkbox",
);
const deleteBtn = document.querySelector(".btn--delete");

const storedData = localStorage.getItem("expenseData");
let data = storedData ? JSON.parse(storedData) : expenses;

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

tbody.addEventListener("change", (e) => {
  if (e.target.classList.contains("section-table__checkbox")) {
    const totalCheckboxes = tbody.querySelectorAll(
      ".section-table__checkbox",
    ).length;
    const checkedCount = tbody.querySelectorAll(
      ".section-table__checkbox:checked",
    ).length;

    checkAll.checked = totalCheckboxes === checkedCount && totalCheckboxes > 0;
  }
});

checkAll.addEventListener("change", (e) => {
  toggleAllCheckboxes(e.target.checked, tbody);
});

deleteBtn.addEventListener("click", () => {
  const checkedCheckboxes = tbody.querySelectorAll(
    ".section-table__checkbox:checked",
  );

  if (checkedCheckboxes.length === 0) {
    alert("삭제할 항목을 선택해주세요.");
    return;
  }

  if (confirm("체크된 항목을 삭제하시겠습니까?")) {
    data = getRemainingData(data, checkedCheckboxes);

    localStorage.setItem("expenseData", JSON.stringify(data));
    updateUI();
    checkAll.checked = false;
  }
});

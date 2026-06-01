import { expenses } from "./mock/expense-data.js";
import { applyFilters, sortDataByDate } from "./utils/filter.js";
import {
  renderTable,
  renderTotal,
  getTotalAmount,
} from "./scripts/render-table.js";
import {
  renderDetailModal,
  openModal,
  closeModal,
  initModalEvents,
} from "./scripts/modal.js";
import { toggleAllCheckboxes, getRemainingData } from "./utils/checkbox.js";

const filterTitle = document.querySelector("#search-title");
const filterType = document.querySelector("#filter-type");
const filterCategory = document.querySelector("#filter-category");
const filterPayment = document.querySelector("#filter-payment");
const applyBtn = document.querySelector("#apply-btn");
const resetBtn = document.querySelector("#reset-btn");

const tbody = document.querySelector(".section-table__tbody");
const modalDetail = document.querySelector("#modal-detail");
const modalAdd = document.querySelector("#modal-add");
const btnAdd = document.querySelector(".btn--add");
const sortSelect = document.querySelector("#sort-order");
const checkAll = document.querySelector(
  ".section-table__thead .section-table__checkbox",
);
const deleteBtn = document.querySelector(".btn--delete");
const totalNetEl = document.querySelector("#total-net");
const addForm = document.querySelector("#form-add-expense");

const saveData = (updatedData) =>
  localStorage.setItem("expenseData", JSON.stringify(updatedData));

const storedData = localStorage.getItem("expenseData");
let data = storedData ? JSON.parse(storedData) : expenses;

const updateUI = () => {
  const filterValues = {
    title: filterTitle.value,
    type: filterType.value,
    category: filterCategory.value,
    payment: filterPayment.value,
  };

  const filteredData = applyFilters(data, filterValues);
  const order = sortSelect.value;
  const sortedData = sortDataByDate(filteredData, order);

  renderTable(sortedData, tbody);
  const totalNet = getTotalAmount(sortedData);
  renderTotal(totalNet, totalNetEl);
};

const handleResetFilter = () => {
  filterTitle.value = "";
  filterType.value = "all";
  filterCategory.value = "all";
  filterPayment.value = "all";
  updateUI();
};

const handleAddExpense = (e) => {
  e.preventDefault();

  const formData = new FormData(addForm);
  const type = formData.get("type");
  let amount = Number(formData.get("amount"));

  if (type === "expenses") {
    amount = -amount;
  }

  const newItem = {
    id: Date.now(),
    title: formData.get("title"),
    amount: amount,
    date: formData.get("date").replace(/-/g, "."),
    category: formData.get("category"),
    payment: formData.get("payment"),
  };

  data = [newItem, ...data];
  saveData(data);
  updateUI();

  addForm.reset();
  closeModal(modalAdd);
};

const handleDeleteExpenses = () => {
  const checkedCheckboxes = tbody.querySelectorAll(
    ".section-table__checkbox:checked",
  );

  if (checkedCheckboxes.length === 0) {
    alert("삭제할 항목을 선택해주세요.");
    return;
  }

  if (confirm("체크된 항목을 삭제하시겠습니까?")) {
    data = getRemainingData(data, checkedCheckboxes);
    saveData(data);
    updateUI();
    checkAll.checked = false;
  }
};

const handleRowClick = (e) => {
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
};

const handleCheckboxChange = (e) => {
  if (e.target.classList.contains("section-table__checkbox")) {
    const totalCheckboxes = tbody.querySelectorAll(
      ".section-table__checkbox",
    ).length;
    const checkedCount = tbody.querySelectorAll(
      ".section-table__checkbox:checked",
    ).length;

    checkAll.checked = totalCheckboxes === checkedCount && totalCheckboxes > 0;
  }
};

updateUI();
initModalEvents(modalDetail);
initModalEvents(modalAdd);

applyBtn.addEventListener("click", updateUI);
resetBtn.addEventListener("click", handleResetFilter);
sortSelect.addEventListener("change", updateUI);

btnAdd.addEventListener("click", () => openModal(modalAdd));
deleteBtn.addEventListener("click", handleDeleteExpenses);
addForm.addEventListener("submit", handleAddExpense);

tbody.addEventListener("click", handleRowClick);
tbody.addEventListener("change", handleCheckboxChange);

checkAll.addEventListener("change", (e) => {
  toggleAllCheckboxes(e.target.checked, tbody);
});

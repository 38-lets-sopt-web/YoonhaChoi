import { renderTable } from "./scripts/render-table.js";
import { expenses } from "./mock/expense-data.js";

const tbody = document.querySelector(".section-table__tbody");

const storedData = localStorage.getItem("expenseData");
const data = storedData ? JSON.parse(storedData) : expenses;
renderTable(data, tbody);

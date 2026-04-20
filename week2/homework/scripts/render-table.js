import { formatAmount } from "../utils/format-amount.js";

export const renderTable = (data, tbody) => {
  if (!tbody) return;

  if (data.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td>내역이 없습니다.</td>
      </tr>
    `;
    return;
  }

  const tableHTML = data
    .map(({ id, title, amount, date, category, payment }) => {
      const { typeClass, displayAmount } = formatAmount(amount);

      return `
      <tr>
        <td>
          <input type="checkbox" class="section-table__checkbox" data-id="${id}" />
        </td>
        <td >${title}</td>
        <td class="${typeClass}">${displayAmount}</td>
        <td >${date}</td>
        <td >${category}</td>
        <td >${payment}</td>
      </tr>
    `;
    })
    .join("");

  tbody.innerHTML = tableHTML;
};

export const getTotalAmount = (data) => {
  return data.reduce((sum, item) => sum + item.amount, 0);
};

export const renderTotal = (totalNet, totalNetEl) => {
  if (!totalNetEl) return;

  const sign = totalNet > 0 ? "+" : "";

  totalNetEl.textContent = `${sign}${totalNet.toLocaleString()}`;

  totalNetEl.classList.remove("income-text", "expense-text");

  if (totalNet > 0) {
    totalNetEl.classList.add("income-text");
  } else if (totalNet < 0) {
    totalNetEl.classList.add("expense-text");
  }
};

import { formatAmount } from "../utils/format-amount.js";
import { CATEGORY_NAME, PAYMENT_NAME } from "../utils/constants.js";

export const renderTable = (data, tbody) => {
  if (!tbody) return;

  if (data.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6">내역이 없습니다.</td>
      </tr>
    `;
    return;
  }

  const tableHTML = data
    .map(({ id, title, amount, date, category, payment }) => {
      const { typeClass, displayAmount } = formatAmount(amount);

      const categoryKorean = CATEGORY_NAME[category] || category;
      const paymentKorean = PAYMENT_NAME[payment] || payment;

      return `
      <tr>
        <td>
          <input type="checkbox" class="section-table__checkbox" data-id="${id}" aria-label="${title} 내역 선택"/>
        </td>
        <td>${title}</td>
        <td class="${typeClass}">${displayAmount}</td>
        <td>${date}</td>
        <td>${categoryKorean}</td>
        <td>${paymentKorean}</td>
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

  totalNetEl.classList.remove("text--income", "text--expense");

  if (totalNet > 0) {
    totalNetEl.classList.add("text--income");
  } else if (totalNet < 0) {
    totalNetEl.classList.add("text--expense");
  }
};

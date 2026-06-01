import { CATEGORY_NAME, PAYMENT_NAME } from "./constants.js";

const matchesMappedValue = (selectedValue, itemValue, valueMap) => {
  if (selectedValue === "all") return true;
  return itemValue === valueMap[selectedValue];
};

export const sortDataByDate = (data, order) => {
  return [...data].sort((a, b) => {
    const dateA = new Date(a.date.replace(/\./g, "-"));
    const dateB = new Date(b.date.replace(/\./g, "-"));
    return order === "date-desc" ? dateB - dateA : dateA - dateB;
  });
};

export const applyFilters = (data, { title, type, category, payment }) => {
  return data.filter((item) => {
    const matchTitle =
      !title || item.title?.toLowerCase().includes(title.toLowerCase());
    let matchType = true;
    if (type === "income") matchType = item.amount > 0;
    if (type === "expenses") matchType = item.amount < 0;

    const matchCategory = matchesMappedValue(
      category,
      item.category,
      CATEGORY_NAME,
    );

    const matchPayment = matchesMappedValue(
      payment,
      item.payment,
      PAYMENT_NAME,
    );

    return matchTitle && matchType && matchCategory && matchPayment;
  });
};

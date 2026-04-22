export const formatAmount = (amount) => {
  const formatted = amount.toLocaleString();

  const typeClass = amount > 0 ? "text--income" : "text--expense";
  const displayAmount = amount > 0 ? `+${formatted}` : formatted;

  return { typeClass, displayAmount };
};

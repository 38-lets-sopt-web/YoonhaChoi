export const toggleAllCheckboxes = (isChecked, tbody) => {
  const rowCheckboxes = tbody.querySelectorAll(".section-table__checkbox");
  rowCheckboxes.forEach((checkbox) => {
    checkbox.checked = isChecked;
  });
};

export const getRemainingData = (data, checkedCheckboxes) => {
  const idsToDelete = Array.from(checkedCheckboxes).map((cb) =>
    Number(cb.dataset.id),
  );

  return data.filter((item) => !idsToDelete.includes(item.id));
};

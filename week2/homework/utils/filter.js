export const sortDataByDate = (data, order) => {
  return [...data].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return order === "date-desc" ? dateB - dateA : dateA - dateB;
  });
};

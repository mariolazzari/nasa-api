export const formatDate = (date: Date = new Date()) => {
  const year = date.getFullYear();

  const month = date.getMonth() + 1;
  const monthStr = month < 10 ? '0' + month : month.toString();

  const day = date.getDate();
  const dayStr = day < 10 ? '0' + day : day.toString();

  return `${year}-${monthStr}-${dayStr}`;
};

export const WEEK = 604800000;
export const MONTH = 2592000000;

export const getNow = () => new Date();

export const getLastWeek = () => new Date(new Date().getTime() - WEEK);

export const getLastMonth = () => new Date(new Date().getTime() - MONTH);

export const formatDate = (date: Date = new Date()) => {
  const year = date.getFullYear();

  const month = date.getMonth() + 1;
  const monthStr = month < 10 ? '0' + month : month.toString();

  const day = date.getDate();
  const dayStr = day < 10 ? '0' + day : day.toString();

  return `${year}-${monthStr}-${dayStr}`;
};

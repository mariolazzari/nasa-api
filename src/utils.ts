/**
 * Week in milliseconds
 */
export const WEEK = 604800000;

/**
 * Month in milliseconds
 */
export const MONTH = 2592000000;

/**
 * Get today date
 * @returns today date
 */
export const getNow = () => new Date();

/**
 * Get last week date
 * @returns last week date
 */
export const getLastWeek = () => new Date(new Date().getTime() - WEEK);

/**
 * Get last month date
 * @returns last month date
 */
export const getLastMonth = () => new Date(new Date().getTime() - MONTH);

/**
 * Format date as ISO string
 * @param date date to format
 * @returns date formatted as ISO string
 */
export const formatDate = (date: Date = new Date()) => {
  const year = date.getFullYear();

  const month = date.getMonth() + 1;
  const monthStr = month < 10 ? '0' + month : month.toString();

  const day = date.getDate();
  const dayStr = day < 10 ? '0' + day : day.toString();

  return `${year}-${monthStr}-${dayStr}`;
};

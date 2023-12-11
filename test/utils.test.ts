import { describe, it, expect } from 'vitest';
import {
  getNow,
  getLastMonth,
  MONTH,
  formatDate,
  getLastWeek,
  WEEK,
} from '../src/utils/dates';
import { from, to } from './global';

describe('Utilities', () => {
  const NOW = new Date();

  it('should return now', () => {
    const now = getNow();

    expect(now.getFullYear).toBe(NOW.getFullYear);
    expect(now.getMonth).toBe(NOW.getMonth);
    expect(now.getMinutes).toBe(NOW.getMinutes);
  });

  it('should return last 7 days', () => {
    const last7 = getLastWeek();

    expect(NOW.getTime() - last7.getTime()).toBeLessThanOrEqual(WEEK);
  });

  it('should return last 30 days', () => {
    const last30 = getLastMonth();

    expect(NOW.getTime() - last30.getTime()).toBeLessThanOrEqual(MONTH);
  });

  it('should format date', () => {
    const fromStr = formatDate(from);
    const toStr = formatDate(to);

    expect(fromStr.substring(0, 4)).toBe(from.getFullYear().toString());
    expect(toStr.substring(0, 4)).toBe(to.getFullYear().toString());
  });
});

import { describe, it, expect } from 'vitest';
import { getNow, getLast30, DAYS_30, formatDate } from '../src/utils';
import { from, to } from './global';

describe('Utilities', () => {
  const NOW = new Date();

  it('should return now', () => {
    const now = getNow();

    expect(now.getFullYear).toBe(NOW.getFullYear);
    expect(now.getMonth).toBe(NOW.getMonth);
    expect(now.getMinutes).toBe(NOW.getMinutes);
  });

  it('should return last 30 days', () => {
    const last30 = getLast30();

    expect(NOW.getTime() - last30.getTime()).toBeLessThanOrEqual(DAYS_30);
  });

  it('should format date', () => {
    const fromStr = formatDate(from);
    const toStr = formatDate(to);

    expect(fromStr.substring(0, 4)).toBe(from.getFullYear().toString());
    expect(toStr.substring(0, 4)).toBe(to.getFullYear().toString());
  });
});

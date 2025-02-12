import { describe, it, expect } from 'vitest';
import { formatDate } from '../src/utils/dates';
import { nasa, from, to, count, thumbs } from './global';
import { checkResponse } from './global';

describe('Picture of the day', () => {
  it('should return today picture', async () => {
    const today = formatDate();
    const res = await nasa.apodDate();

    checkResponse(res);

    expect(res.success).toBeTruthy();
    if (res.success) {
      const { data } = res;
      expect(data).toBeDefined();
      expect(data.date).toBe(today);
    } else {
      expect(res.success).toBeFalsy();
      expect(res.error).toBeDefined();
    }
  });

  it('should return one month pictures', async () => {
    const res = await nasa.apodDates(from, to);
    checkResponse(res);
    if (res.success) {
      expect(res.data.length).toBe(30);
    }
  });

  it('should return 10 random pictures', async () => {
    const res = await nasa.apodRandom(count);
    checkResponse(res);
    if (res.success) {
      expect(res.data.length).toBe(count);
    }
  });

  it('should return 10 random pictures with thumbs available', async () => {
    const res = await nasa.apodRandom(count, thumbs);
    checkResponse(res);
    if (res.success) {
      expect(res.data.length).toBe(count);
      expect(res.data.every(apod => !!apod.url)).toBeTruthy();
    }
  });
});

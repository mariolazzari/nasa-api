import { describe, it, expect } from 'vitest';
import { formatDate } from '../src/utils';
import Apod from '../src/types/apod/Apod';
import { nasa, from, to, count, thumbs } from './global';

describe('Picture of the day', () => {
  it('should return today picture', async () => {
    const today = formatDate();
    const { success, data, error } = await nasa.apodDate();

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect((data as Apod).date).toBe(today);
    expect(error).toBeUndefined();
  });

  it('should return one month pictures', async () => {
    const { success, data, error } = await nasa.apodDates(from, to);

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect((data as Apod[]).length).toBe(30);
    expect(error).toBeUndefined();
  });

  it('should return 10 random pictures', async () => {
    const { success, data, error } = await nasa.apodRandom(count);

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect((data as Apod[]).length).toBe(count);
    expect(error).toBeUndefined();
  });

  it('should return 10 random pictures with thumbs available', async () => {
    const { success, data, error } = await nasa.apodRandom(count, thumbs);

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect((data as Apod[]).length).toBe(count);
    expect((data as Apod[]).every(apod => !!apod.url)).toBeTruthy();
    expect(error).toBeUndefined();
  });
});

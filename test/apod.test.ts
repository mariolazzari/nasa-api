import { describe, it, expect } from 'vitest';
import { formatDate } from '../src/utils';
import Nasa from '../src/Nasa';
import Apod from '../src/types/Apod';

describe('Picture of the day', () => {
  const nasa = new Nasa('DEMO_KEY');

  it('should return today picture', async () => {
    const today = formatDate();
    const { success, data, error } = await nasa.apodDate();

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect((data as Apod).date).toBe(today);
    expect(error).toBeUndefined();
  });

  it('should return one week pictures', async () => {
    const start = new Date(2023, 2, 21);
    const end = new Date(2023, 2, 28);
    const { success, data, error } = await nasa.apodDates(start, end);

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect((data as Apod[]).length).toBe(8);
    expect(error).toBeUndefined();
  });

  it('should return 10 random pictures', async () => {
    const count = 10;
    const { success, data, error } = await nasa.apodRandom(count);

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect((data as Apod[]).length).toBe(count);
    expect(error).toBeUndefined();
  });

  it('should return 10 random pictures with thumbs available', async () => {
    const count = 10;
    const thumbs = true;
    const { success, data, error } = await nasa.apodRandom(count, thumbs);

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect((data as Apod[]).length).toBe(count);
    expect((data as Apod[]).every(apod => !!apod.url)).toBeTruthy();
    expect(error).toBeUndefined();
  });
});

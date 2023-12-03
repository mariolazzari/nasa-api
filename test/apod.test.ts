import { describe, it, expect } from 'vitest';
import { nasa } from './global';
import { formatDate } from '../src/utils';
import Apod from '../src/types/Apod';

describe('Picture of the day', () => {
  it('should return today picture', async () => {
    const today = formatDate(new Date());
    const { success, data, error } = await nasa.apod();

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect((data as Apod).date).toBe(today);
    expect(error).toBeUndefined();
  });

  it('should return one week pictures', async () => {
    const start_date = formatDate(new Date(2023, 2, 21));
    const end_date = formatDate(new Date(2023, 2, 28));

    const { success, data, error } = await nasa.apod({ start_date, end_date });

    expect(success).toBeTruthy();
    expect(data).toBeDefined();
    expect((data as Apod[]).length).toBe(8);
    expect(error).toBeUndefined();
  });
});

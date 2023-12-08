import { describe, it, expect } from 'vitest';
import { nasa, from, to } from './global';

describe('Near Earth objects', () => {
  it('should returns one week', async () => {
    const { success, data, error } = await nasa.neoFeed(from, to);

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();

    if (data?.near_earth_objects) {
      let total = 0;
      const values = Object.values(data.near_earth_objects);
      values.forEach(day => {
        total += day.length;
      });

      expect(total).toBe(data.element_count);
    }
  });
});

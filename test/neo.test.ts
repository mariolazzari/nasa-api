import { describe, it, expect } from 'vitest';
import { nasa, from, toWeek } from './global';

describe('Near Earth objects', () => {
  it('should returns one week', async () => {
    const { success, data, error } = await nasa.neoFeed(from, toWeek);

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

  it('should returns asteroid data', async () => {
    const id = 3542519;
    const { success, data, error } = await nasa.neoLookup(id);

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });
});

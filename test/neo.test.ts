import { describe, it, expect } from 'vitest';
import { nasa, from, toWeek, checkResponse } from './global';

describe('Near Earth objects', () => {
  it('should returns one week', async () => {
    const res = await nasa.neoFeed(from, toWeek);
    checkResponse(res);
    if (res.success) {
      let total = 0;
      const values = Object.values(res.data.near_earth_objects);
      values.forEach(day => {
        total += day.length;
      });
      expect(total).toBe(res.data.element_count);
    }
  });

  it('should returns asteroid data', async () => {
    const id = 3542519;
    const res = await nasa.neoLookup(id);
    checkResponse(res);
  });
});

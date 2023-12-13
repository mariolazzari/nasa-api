import { describe, it, expect } from 'vitest';
import { nasa, from, toWeek } from './global';

describe('Mars rovers photos', () => {
  it('should return all rover cameras', async () => {
    const { success, error, data } = nasa.marsCameras();

    console.log(data);

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
    expect(data?.length).toBe(9);
  });
});

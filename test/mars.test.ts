import { describe, it, expect } from 'vitest';
import { nasa, checkResponse } from './global';

describe('Mars rovers photos', () => {
  it('should return all rover cameras', async () => {
    const res = nasa.marsCameras();
    checkResponse(res);
    if (res.success) {
      expect(res.data.length).toBe(4);
    }
  });
});

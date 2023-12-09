import { describe, it, expect } from 'vitest';
import { nasa, from, to } from './global';

describe('DONKI', () => {
  it('should return 1 week Coronal Mass Ejection', async () => {
    const { success, error, data } = await nasa.donkiCme(from, to);

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });
});

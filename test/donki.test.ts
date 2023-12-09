import { describe, it, expect } from 'vitest';
import { nasa, from, to } from './global';

describe('DONKI', () => {
  it('should return last 30 days Coronal Mass Ejection', async () => {
    const { success, error, data } = await nasa.donkiCme();

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });

  it('should return last  7 days Coronal Mass Ejection', async () => {
    const { success, error, data } = await nasa.donkiCme(from, to);

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });

  it('should return last 30 days Coronal Mass Ejection Analysis', async () => {
    const { success, error, data } = await nasa.donkiCmeAnalysis();

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });

  it('should return last  7 days Coronal Mass Ejection Analysis with 50 as minimum speed', async () => {
    const { success, error, data } = await nasa.donkiCmeAnalysis(
      from,
      to,
      true,
      true,
      50
    );

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });
});

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

  it('should return last 30 days Geomagnetic Storm (GST)', async () => {
    const from = new Date(2020, 0, 1);
    const to = new Date(2020, 0, 31);
    const { success, error, data } = await nasa.donkiGst(from, to);

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });

  it('should return last 30 days Interplanetary Shock (IPS)', async () => {
    const from = new Date(2020, 0, 1);
    const to = new Date(2020, 0, 31);
    const { success, error, data } = await nasa.donkiGst(from, to);

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });
});

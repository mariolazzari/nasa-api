import { describe, it, expect } from 'vitest';
import { nasa, from, to } from './global';

describe('DONKI', () => {
  it('should return last 30 days Coronal Mass Ejection (CME)', async () => {
    const { success, error, data } = await nasa.donkiCme();

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });

  it('should return last 30 days Coronal Mass Ejection Analysis (CME Analysis)', async () => {
    const { success, error, data } = await nasa.donkiCmeAnalysis();

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });

  it('should return last  7 days Coronal Mass Ejection Analysis with 50 as minimum speed (CME Analysis)', async () => {
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
    const { success, error, data } = await nasa.donkiGst(from, to);

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });

  it('should return last 30 days Interplanetary Shock (IPS)', async () => {
    const { success, error, data } = await nasa.donkiIps(from, to);

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });

  it('should return last 30 days Solar Flare (FLR)', async () => {
    const { success, error, data } = await nasa.donkiFlr(from, to);

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });

  it('should return last 30 days Solar Energetic Particle (SEP)', async () => {
    const { success, error, data } = await nasa.donkiSep(from, to);

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });

  it('should return last 30 days Magnetopause Crossing (MPC)', async () => {
    const { success, error, data } = await nasa.donkiMpc(from, to);

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });

  it('should return last 30 days Radiation Belt Enhancement (RBE)', async () => {
    const { success, error, data } = await nasa.donkiRbe(from, to);

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });

  it('should return last 30 days Hight Speed Stream (HSS)', async () => {
    const { success, error, data } = await nasa.donkiHss(from, to);

    expect(success).toBeTruthy();
    expect(error).toBeUndefined();
    expect(data).toBeDefined();
  });
});

import { describe, it, expect } from 'vitest';
import { nasa, from, to } from './global';
import NotificationType from '../src/types/donki/NotificationType';
import { checkResponse } from './global';

describe('DONKI', () => {
  it('should return last 30 days Coronal Mass Ejection (CME)', async () => {
    const res = await nasa.donkiCme();
    checkResponse(res);
  });

  it('should return last 30 days Coronal Mass Ejection Analysis (CME Analysis)', async () => {
    const res = await nasa.donkiCmeAnalysis();
    checkResponse(res);
  });

  it('should return last  7 days Coronal Mass Ejection Analysis with 50 as minimum speed (CME Analysis)', async () => {
    const res = await nasa.donkiCmeAnalysis(from, to, true, true, 50);
    checkResponse(res);
  });

  it('should return last 30 days Geomagnetic Storm (GST)', async () => {
    const res = await nasa.donkiGst(from, to);
    checkResponse(res);
  });

  it('should return last 30 days Interplanetary Shock (IPS)', async () => {
    const res = await nasa.donkiIps(from, to);
    checkResponse(res);
  });

  it('should return last 30 days Solar Flare (FLR)', async () => {
    const res = await nasa.donkiFlr(from, to);
    checkResponse(res);
  });

  it('should return last 30 days Solar Energetic Particle (SEP)', async () => {
    const res = await nasa.donkiSep(from, to);
    checkResponse(res);
  });

  it('should return last 30 days Magnetopause Crossing (MPC)', async () => {
    const res = await nasa.donkiMpc(from, to);
    checkResponse(res);
  });

  it('should return last 30 days Radiation Belt Enhancement (RBE)', async () => {
    const res = await nasa.donkiRbe(from, to);
    checkResponse(res);
  });

  it('should return last 30 days Hight Speed Stream (HSS)', async () => {
    const res = await nasa.donkiHss(from, to);
    checkResponse(res);
  });

  it('should return last 30 days WSA+EnlilSimulation (WSA)', async () => {
    const res = await nasa.donkiWsa(from, to);
    checkResponse(res);
  });

  it('should return last 30 days Notification (all types)', async () => {
    const res = await nasa.donkiNotifications(from, to);
    checkResponse(res);
  });

  it('should return last 30 days Notification (CME only)', async () => {
    const type: NotificationType = 'CME';
    const res = await nasa.donkiNotifications(from, to, type);
    checkResponse(res);
    if (res.success) {
      expect(res.data.every(n => n.messageType === type));
    }
  });
});

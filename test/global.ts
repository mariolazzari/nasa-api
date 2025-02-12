import dotenv from 'dotenv';
import Nasa from '../src/Nasa';

dotenv.config();
const apiKey = process.env.NASA_API_KEY || 'DEMO_KEY';

export const nasa = new Nasa(apiKey);
export const from = new Date(2016, 0, 1);
export const to = new Date(2016, 0, 30);
export const toWeek = new Date(2016, 0, 7);
export const count = 10;
export const thumbs = true;

export const latitude = 45.566458;
export const longitude = 9.975584;

import { expect } from 'vitest';
import { Result } from '../src/types/Result';

export function checkResponse<T>(res: Result<T>): void {
  if (res.success) {
    expect(res.data).toBeDefined();
  } else {
    expect(res.success).toBeFalsy();
    expect(res.error).toBeDefined();
  }
}

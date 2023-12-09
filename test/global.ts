import dotenv from 'dotenv';
import Nasa from '../src/Nasa';

dotenv.config();
const apiKey = process.env.NASA_API_KEY || 'DEMO_KEY';

export const nasa = new Nasa(apiKey);
export const from = new Date(2023, 2, 21);
export const to = new Date(2023, 2, 28);
export const count = 10;
export const thumbs = true;

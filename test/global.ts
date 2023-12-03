import dotenv from 'dotenv';
import Nasa from '../src/Nasa';

// read env
dotenv.config();
const { API_KEY } = process.env;

// init client
export const nasa = new Nasa(API_KEY!);

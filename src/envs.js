import { config } from 'dotenv';

config();

export default {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  GANACHE_ACCOUNTS_PATH: process.env.GANACHE_ACCOUNTS_PATH,
};

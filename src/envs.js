import { config } from 'dotenv';

config();

export default {
  PORT: process.env.PORT,
  GANACHE_ACCOUNTS_PATH: process.env.GANACHE_ACCOUNTS_PATH,
};

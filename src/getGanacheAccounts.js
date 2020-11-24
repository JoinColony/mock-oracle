import fs from 'fs';
import { resolve } from 'path';
import envs from './envs';

const { GANACHE_ACCOUNTS_PATH } = envs;
const ganacheAccountsPath = resolve(GANACHE_ACCOUNTS_PATH);

export default () => {
  try {

    /*
     * We should maybe also test if the file type is json
     */
    if (!fs.existsSync(ganacheAccountsPath)) {
      throw new Error();
    }

    const ganacheAccountsFile = require(ganacheAccountsPath);
    return Object.keys(ganacheAccountsFile.private_keys);

  } catch {

    console.error('Cannot find ganache accounts file')

    const ganacheAccountsFallback = require('./staticAccounts.json');
    return ganacheAccountsFallback;
  }
}

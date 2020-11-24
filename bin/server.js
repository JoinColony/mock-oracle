import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { yellow, bold } from 'chalk';

import { appName } from '../package.json';
import source from '../src';

const { getGanacheAccounts, envs } = source;
const { PORT, HOST } = envs;

// export default () => {
//   const ganacheAccounts = getGanacheAccounts();
//   console.log(ganacheAccounts);
// };


export default async () => {

  const server = express();
  // const port = process.env.APOLLO_PORT

  server.use(cors());
  server.use(json());

  server.listen(PORT, HOST, () => {
    console.info(bold(appName), 'listening on', yellow(`http://${HOST}:${PORT}`));
  });
};

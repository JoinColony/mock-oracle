import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { yellow, bold } from 'chalk';

import { appName } from '../package.json';
import source from '../src';

const { getGanacheAccounts, envs, constants } = source;
const { PORT, HOST } = envs;
const { DEFAULT_RESPONSE, ROUTES } = constants;
const { DEFAULT, USER_REPUTATION, COLONY_TOTAL_REPUTATION, USERS_WITH_REPUTATION } = ROUTES;

export default async () => {
  const server = express();
  server.use(cors());
  server.use(json());

  /*
   * Default reponse
   */
  server.get(DEFAULT, function (req, res) {
    res.send(DEFAULT_RESPONSE);
  })

  /*
   * A user's reputation inside a colony
   */
  server.get(USER_REPUTATION, function (req, res) {
    res.send(req.params)
  })

  /*
   * Total reputation available inside a colony
   */
  server.get(COLONY_TOTAL_REPUTATION, function (req, res) {
    res.send(req.params)
  })

  /*
   * All members with reputation, sorted by reputation
   */
  server.get(USERS_WITH_REPUTATION, function (req, res) {
    res.send(req.params)
  })

  server.listen(PORT, HOST, () => {
    console.info(bold(appName), 'listening on', yellow(`http://${HOST}:${PORT}`));
  });
};

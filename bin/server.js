import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { yellow, bold } from 'chalk';
import { isAddress } from 'web3-utils';

import { appName } from '../package.json';
import source from '../src';

const { envs, constants, generateReponse } = source;
const { PORT, HOST } = envs;
const { RESPONSES, ROUTES, STATUSES, NULL_ADDRESS, RESPONSE_TYPES } = constants;
const { DEFAULT, USER_REPUTATION: USER_REPUTATION_ROUTE, MEMBERS_WITH_REPUTATION: MEMBERS_WITH_REPUTATION_ROUTE } = ROUTES;
const { DEFAULT: DEFAULT_RESPONSE, ADDRESS_INVALID } = RESPONSES;
const { OK, INTERNAL_SERVER_ERROR } = STATUSES;
const { USER_REPUTATION, TOTAL_REPUTATION, MEMBERS_WITH_REPUTATION } = RESPONSE_TYPES;

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

  server.get(USER_REPUTATION_ROUTE, function (req, res) {
    /*
     * @NOTE We don't actually care about the root hash, or colony address, just assume it's correct
     */
    const { domainSkillId, userAddress } = req.params;
    if (!isAddress(userAddress)) {
      return res.status(INTERNAL_SERVER_ERROR).send(ADDRESS_INVALID);
    }
    /*
     * Total reputation available inside a colony
     */
    if (userAddress === NULL_ADDRESS) {
      return res.status(OK).send(
        generateReponse(userAddress, domainSkillId, TOTAL_REPUTATION),
      );
    }
    /*
     * A user's reputation inside a colony
     */
    return res.status(OK).send(
      generateReponse(userAddress, domainSkillId, USER_REPUTATION),
    );
  })

  /*
   * All members with reputation, sorted by reputation
   */
  server.get(MEMBERS_WITH_REPUTATION_ROUTE, function (req, res) {
    /*
     * @NOTE We don't actually care about the root hash, or colony address, just assume it's correct
     */
    const { domainSkillId } = req.params;
    return res.status(OK).send(
      generateReponse(undefined, domainSkillId, MEMBERS_WITH_REPUTATION),
    );
  })

  server.listen(PORT, HOST, () => {
    console.info(bold(appName), 'listening on', yellow(`http://${HOST}:${PORT}`));
  });
};

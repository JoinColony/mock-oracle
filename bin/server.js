import expresponses from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { yellow, bold } from 'chalk';
import { isAddress } from 'web3-utils';

import { appName } from '../package.json';
import source from '../src';

const { envs, constants, generateReponse, generateReputation } = source;
const { PORT, HOST } = envs;
const { RESPONSES, ROUTES, STATUSES, NULL_ADDRESS, RESPONSE_TYPES } = constants;
const { DEFAULT, USER_REPUTATION: USER_REPUTATION_ROUTE, MEMBERS_WITH_REPUTATION: MEMBERS_WITH_REPUTATION_ROUTE } = ROUTES;
const { DEFAULT: DEFAULT_RESPONSE, ADDRESS_INVALID } = RESPONSES;
const { OK, INTERNAL_SERVER_ERROR } = STATUSES;
const { USER_REPUTATION, TOTAL_REPUTATION, MEMBERS_WITH_REPUTATION } = RESPONSE_TYPES;

export default async () => {
  const server = expresponses();
  server.use(cors());
  server.use(json());

  const totalReputation = generateReputation();

  /*
   * Default reponse
   */
  server.get(DEFAULT, function (_, response) {
    response.send(DEFAULT_RESPONSE);
  })

  server.get(USER_REPUTATION_ROUTE, function (request, response) {
    /*
     * @NOTE We don't actually care about the root hash, skill id, or colony addresponses,
     * just assume they're correct
     */
    const { userAddress } = request.params;
    if (!isAddress(userAddress)) {
      return response.status(INTERNAL_SERVER_ERROR).send(ADDRESS_INVALID);
    }
    /*
     * Total reputation available inside a colony
     */
    if (userAddress === NULL_ADDRESS) {
      return response.status(OK).send(
        generateReponse(totalReputation, userAddress, TOTAL_REPUTATION),
      );
    }
    /*
     * A user's reputation inside a colony
     */
    return response.status(OK).send(
      generateReponse(totalReputation, userAddress, USER_REPUTATION),
    );
  })

  /*
   * All members with reputation, sorted by reputation
   */
  server.get(MEMBERS_WITH_REPUTATION_ROUTE, function (_, response) {
    /*
     * @NOTE We don't actually care about the root hash, skill id,  or colony addresponses,
     * just assume they're correct
     */
    return response.status(OK).send(
      generateReponse(totalReputation, undefined, MEMBERS_WITH_REPUTATION),
    );
  })

  server.listen(PORT, HOST, () => {
    console.info(bold(appName), 'listening on', yellow(`http://${HOST}:${PORT}`));
  });
};

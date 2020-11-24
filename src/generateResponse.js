import BigNumber from 'bn.js';

import constants from './constants';

const { RESPONSES, RESPONSE_TYPES, BN_ZERO } = constants;
const { REPUTATION } = RESPONSES;

export default (totalReputation, userAddress, responseType) => {
  switch (responseType) {
    case RESPONSE_TYPES.USER_REPUTATION:
      return JSON.stringify({
        ...REPUTATION,
        reputationAmount: totalReputation[userAddress] || BN_ZERO,
      });
    case RESPONSE_TYPES.TOTAL_REPUTATION:
      const totalReputationAmount = Object.keys(totalReputation).reduce(
        (total, address) => total.add(new BigNumber(totalReputation[address])),
        new BigNumber(0),
      );
      return JSON.stringify({
        ...REPUTATION,
        reputationAmount: totalReputationAmount.toString() || BN_ZERO,
      });
    case RESPONSE_TYPES.MEMBERS_WITH_REPUTATION:
    default:
      return '';
  }
};

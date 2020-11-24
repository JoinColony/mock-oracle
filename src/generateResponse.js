import BigNumber from 'bn.js';

import constants from './constants';

const { RESPONSES, RESPONSE_TYPES, BN_ZERO } = constants;
const { REPUTATION, SORTED_MEMBERS } = RESPONSES;

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
      const sortReputation = (firstAddress, secondAddress) => {
        const firstValue = new BigNumber(totalReputation[firstAddress]);
        const secondValue = new BigNumber(totalReputation[secondAddress]);
        return firstValue.cmp(secondValue)
      };
      const membersByReputation =
        Object.keys(totalReputation).sort(sortReputation).reverse();
      return JSON.stringify({
        ...SORTED_MEMBERS,
        addresses: membersByReputation,
      });
    default:
      return '';
  }
};

import constants from './constants';

const { RESPONSES, RESPONSE_TYPES } = constants;
const { REPUTATION } = RESPONSES;

export default (totalReputation, userAddress, responseType) => {
  switch (responseType) {
    case RESPONSE_TYPES.USER_REPUTATION:
      const response = {
        ...REPUTATION,
        reputationAmount: totalReputation[userAddress] || '0',
      };
      return JSON.stringify(response);
    case RESPONSE_TYPES.TOTAL_REPUTATION:
    case RESPONSE_TYPES.MEMBERS_WITH_REPUTATION:
    default:
      return '';
  }
}

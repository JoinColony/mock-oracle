import getGanacheAccounts from './getGanacheAccounts';
import getRandomReputation from './getRandomReputation';
import constants from './constants';

const { RESPONSES, RESPONSE_TYPES } = constants;
const { REPUTATION } = RESPONSES;

export default (userAddress, domainSkillId, responseType) => {
  const ganacheAccounts = getGanacheAccounts();

  switch (responseType) {
    case RESPONSE_TYPES.USER_REPUTATION:
      const accountIndex = ganacheAccounts.findIndex(address => address === userAddress) + 1 || 1;

      /*
       * @NOTE We don't really care about the domain Skill id either,
       * we just use it for a random reputation multiplier
       */
      const userReputation = getRandomReputation(
        accountIndex,
        parseInt(domainSkillId, 10) || 100,
      );

      const response = {
        ...REPUTATION,
        reputationAmount: userReputation,
      };
      return JSON.stringify(response);
    case RESPONSE_TYPES.TOTAL_REPUTATION:
    case RESPONSE_TYPES.MEMBERS_WITH_REPUTATION:
    default:
      return '';
  }
}

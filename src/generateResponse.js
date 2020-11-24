import getGanacheAccounts from './getGanacheAccounts';
import getRandomReputation from './getRandomReputation';
import constants from './constants';

const { RESPONSES } = constants;
const { REPUTATION } = RESPONSES;

export default (userAddress, domainSkillId, responseType) => {



  const ganacheAccounts = getGanacheAccounts();
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
}

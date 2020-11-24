import getGanacheAccounts from './getGanacheAccounts';
import getRandomReputation from './getRandomReputation';

export default () => {
  const ganacheAccounts = getGanacheAccounts();
  const accountsWithReputation = {};
  ganacheAccounts.map(account => {
    const accountIndex = ganacheAccounts.findIndex(address => address === account) + 1 || 1;
    const accountReputation = getRandomReputation(accountIndex);
    accountsWithReputation[account] = accountReputation;
  });
  return accountsWithReputation;
};

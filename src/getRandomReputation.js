import BigNumber from 'bn.js';

import getGanacheAccounts from './getGanacheAccounts';
import constants from './constants';

const { WEI } = constants;

const getRandomReputation = (currentAccountIndex, baseReputationMultiplier = 100) => {
  const lameRandomness = Math.floor(Math.random() * 10);
  const oneWei = new BigNumber(WEI);
  const reputationInWei = oneWei
    .mul(new BigNumber(currentAccountIndex))
    .mul(new BigNumber(baseReputationMultiplier))
    .mul(new BigNumber(lameRandomness));
  return reputationInWei;
};

export default () => {
  console.log(getRandomReputation(5), getRandomReputation(5), getRandomReputation(5), typeof getRandomReputation(5));
};

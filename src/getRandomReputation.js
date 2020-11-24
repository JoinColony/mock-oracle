import BigNumber from 'bn.js';

import constants from './constants';

const { WEI } = constants;

export default (currentAccountIndex, baseReputationMultiplier = 100) => {
  const lameRandomness = Math.floor(Math.random() * 10);
  const oneWei = new BigNumber(WEI);
  const reputationInWei = oneWei
    .mul(new BigNumber(currentAccountIndex))
    .mul(new BigNumber(baseReputationMultiplier))
    .mul(new BigNumber(lameRandomness));
  return reputationInWei.toString();
};

import BigNumber from 'bn.js';

import constants from './constants';

const { WEI } = constants;

export default (currentAccountIndex, baseReputationMultiplier = 100) => {
  /*
   * Radom between 1 and 10
   * min + floor(random * (max - min + 1))
   */
  const lameRandomness = 1 + Math.floor(Math.random() * 10);
  const oneWei = new BigNumber(WEI);
  const reputationInWei = oneWei
    .mul(new BigNumber(currentAccountIndex))
    .mul(new BigNumber(baseReputationMultiplier))
    .mul(new BigNumber(lameRandomness));
  return reputationInWei.toString();
};

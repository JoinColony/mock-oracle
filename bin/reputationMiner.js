import source from '../src';

const { getGanacheAccounts } = source;

export default () => {
  const ganacheAccounts = getGanacheAccounts();
  console.log(ganacheAccounts);
};

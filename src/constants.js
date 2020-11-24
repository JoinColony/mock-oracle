const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
const WEI = '1000000000000000000';
const NETWORK = 'local';

const ROUTES = {
  DEFAULT: '/',
  USER_REPUTATION: `/reputation/${NETWORK}/:rootHash/:colonyAddress/:domainSkillId/:userAddress`,
  // COLONY_TOTAL_REPUTATION: `/reputation/${NETWORK}/:rootHash/:colonyAddress/:domainSkillId/${NULL_ADDRESS}`,
  USERS_WITH_REPUTATION: `/reputation/${NETWORK}/:rootHash/:colonyAddress/:domainSkillId`,
};

const DEFAULT_RESPONSE = `
  <h1>Mock Reputation Miner Server</h1>
  <p>Please use one the require request paths to query your desired reputation</p>
  <ul>
    <li>
      <p><b>Fetch a user's reputation, in a colony:</b></p>
      <pre>${ROUTES.USER_REPUTATION}</pre>
    </li>
    <li>
      <p><b>Fetch a the total reputation available in a colony:</b></p>
      <pre>${ROUTES.COLONY_TOTAL_REPUTATION}</pre>
    </li>
    <li>
      <p><b>Fetch all users who have reputation in a colony, sorted by the reputation amount:</b></p>
      <pre>${ROUTES.USERS_WITH_REPUTATION}</pre>
    </li>
  </ul>
`;

const RESPONSES = {
  DEFAULT: DEFAULT_RESPONSE,
  ADDRESS_INVALID: 'Please specify a valid user address',
  REPUTATION: {
    branchMask: '0x0',
    siblings: ['0x0', '0x0'],
    key: '0x0',
    value: '0x0',
    reputationAmount: '0',
  },
  SORTED_MEMBERS: {
    addresses: [],
  }
};

const STATUSES = {
  OK: 200,
  INTERNAL_SERVER_ERROR: 500,
};

export default {
  NULL_ADDRESS,
  WEI,
  NETWORK,
  ROUTES,
  RESPONSES,
  STATUSES
};

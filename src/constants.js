const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';

const NETWORK = 'local';

const ROUTES = {
  DEFAULT: '/',
  USER_REPUTATION: `/reputation/${NETWORK}/:rootHash/:colonyAddress/:domainSkillId/:userAddress`,
  COLONY_TOTAL_REPUTATION: `/reputation/${NETWORK}/:rootHash/:colonyAddress/:domainSkillId/${NULL_ADDRESS}`,
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

export default {
  DEFAULT_RESPONSE,
  NULL_ADDRESS,
  NETWORK,
  ROUTES,
};
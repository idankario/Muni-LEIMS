import { CognitoUserPool } from "amazon-cognito-identity-js";

const UserPoolId = process.env.REACT_APP_POOL_ID;
const ClientId = process.env.REACT_APP_COGNITO_CLIENT_ID;
const PoolData = {
  UserPoolId,
  ClientId,
};

export default new CognitoUserPool(PoolData);

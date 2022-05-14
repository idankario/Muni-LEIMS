import { CognitoUserPool } from "amazon-cognito-identity-js";

const PoolData = {
  UserPoolId: "eu-west-1_gr78yvsgh",
  ClientId: "3b0m43m86sc1gunifbah6d42ed",
};

export default new CognitoUserPool(PoolData);

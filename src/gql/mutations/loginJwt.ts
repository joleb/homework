import { gql } from "../_generated";

const LOGIN_JWT_MUTATION = gql(`
  mutation LoginJwt($input: LoginJwtInput!) {
    Auth {
      loginJwt(input: $input) {
        loginResult {
          jwtTokens {
            accessToken
          }
        }
      }
    }
  }
  `);

export default LOGIN_JWT_MUTATION;

 
import { gql } from "./_generated";

export const LOGIN_MUTATION = gql(`
mutation LoginJwt($input: LoginJwtInput!) {
  Auth {
    loginJwt(input: $input) {
      loginResult {
        jwtTokens {
          accessToken
          refreshToken
        }
        firstLogin
      }
    }
  }
}
`);
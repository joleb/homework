import { gql } from "../_generated";

const LOGOUT_MUTATION = gql(`
  mutation LogoutJwt($input: LogoutJwtInput!) {
    Auth {
      logoutJwt(input: $input) {
        clientMutationId
      }
    }
  }
  `);

export default LOGOUT_MUTATION;

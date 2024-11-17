import { gql } from "../_generated";

const LOGIN_MUTATION = gql(`
  mutation Login($loginInput: LoginInput!) {
    Auth {
      login(input: $loginInput) {
        accounts {
          name
        }
      }
    }
  }
`);

export default LOGIN_MUTATION;

/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation LoginJwt($input: LoginJwtInput!) {\n    Auth {\n      loginJwt(input: $input) {\n        loginResult {\n          jwtTokens {\n            accessToken\n          }\n        }\n      }\n    }\n  }\n  ": types.LoginJwtDocument,
    "\n  mutation LogoutJwt($input: LogoutJwtInput!) {\n    Auth {\n      logoutJwt(input: $input) {\n        clientMutationId\n      }\n    }\n  }\n  ": types.LogoutJwtDocument,
    "\n  query Admin($before: String, $after: String, $first: Int, $last: Int) {\n    Admin {\n      Tree {\n        GetContentNodes(before: $before, after: $after, first: $first, last: $last) {\n          edges {\n            cursor\n            node {\n              id\n              description\n              image {\n                name\n                thumbnailKey\n                id\n                thumbnail\n                url\n              }\n              shortDescription\n              structureDefinition {\n                  title\n              }\n              hasBeenPublishedOnce\n            }\n          }\n          pageInfo {\n            endCursor\n            startCursor\n            hasNextPage\n            hasPreviousPage\n          }\n        }\n      }\n    }\n  }  \n": types.AdminDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LoginJwt($input: LoginJwtInput!) {\n    Auth {\n      loginJwt(input: $input) {\n        loginResult {\n          jwtTokens {\n            accessToken\n          }\n        }\n      }\n    }\n  }\n  "): (typeof documents)["\n  mutation LoginJwt($input: LoginJwtInput!) {\n    Auth {\n      loginJwt(input: $input) {\n        loginResult {\n          jwtTokens {\n            accessToken\n          }\n        }\n      }\n    }\n  }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LogoutJwt($input: LogoutJwtInput!) {\n    Auth {\n      logoutJwt(input: $input) {\n        clientMutationId\n      }\n    }\n  }\n  "): (typeof documents)["\n  mutation LogoutJwt($input: LogoutJwtInput!) {\n    Auth {\n      logoutJwt(input: $input) {\n        clientMutationId\n      }\n    }\n  }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Admin($before: String, $after: String, $first: Int, $last: Int) {\n    Admin {\n      Tree {\n        GetContentNodes(before: $before, after: $after, first: $first, last: $last) {\n          edges {\n            cursor\n            node {\n              id\n              description\n              image {\n                name\n                thumbnailKey\n                id\n                thumbnail\n                url\n              }\n              shortDescription\n              structureDefinition {\n                  title\n              }\n              hasBeenPublishedOnce\n            }\n          }\n          pageInfo {\n            endCursor\n            startCursor\n            hasNextPage\n            hasPreviousPage\n          }\n        }\n      }\n    }\n  }  \n"): (typeof documents)["\n  query Admin($before: String, $after: String, $first: Int, $last: Int) {\n    Admin {\n      Tree {\n        GetContentNodes(before: $before, after: $after, first: $first, last: $last) {\n          edges {\n            cursor\n            node {\n              id\n              description\n              image {\n                name\n                thumbnailKey\n                id\n                thumbnail\n                url\n              }\n              shortDescription\n              structureDefinition {\n                  title\n              }\n              hasBeenPublishedOnce\n            }\n          }\n          pageInfo {\n            endCursor\n            startCursor\n            hasNextPage\n            hasPreviousPage\n          }\n        }\n      }\n    }\n  }  \n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
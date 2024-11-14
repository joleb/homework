import { gql } from "./_generated";

export const GET_CONTENT_NODES = gql(`
  query Admin($before: String, $after: String, $first: Int, $last: Int) {
    Admin {
      Tree {
        GetContentNodes(before: $before, after: $after, first: $first, last: $last) {
          edges {
            cursor
            node {
              id
              description
              image {
                name
                fileType
                fileSize
                storageKey
                thumbnailKey
                accessType
                tags
                uploadDateTime
                id
                thumbnail
                url
              }
              shortDescription
              structureDefinition { 
                title
              }
            }
          }
          pageInfo {
            endCursor
            startCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }
  }
  
`);

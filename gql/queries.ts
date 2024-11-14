import { gql,  } from "./_generated";

export const GET_CONTENT_NODES = gql(`
  query Admin {
    Admin {
      Tree {
        GetContentNodes {
          edges {
            cursor
            node {
              id
              attachments {
                id
                title
                description
                kind
              }
              structureDefinition {
                title
                coordinates {
                  parentRef
                }
                definitionType
              }
              typeDefinition {
                definitionType
              }
              description
              shortDescription
              imageId
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
              versioning {
                draftVersion
                releaseVersion
              }
              instructors {
                id
                superId
                name
              }
              parentId
              hasBeenPublishedOnce
              rootId
            }
          }
        }
      }
    }
  }
`);
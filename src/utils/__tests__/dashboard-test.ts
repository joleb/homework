import { updateQuery } from "../dashboard";
import { AdminQuery } from "../../gql/_generated/graphql";

const defaultEdge = {
  node: {
    id: "1",
    description: "Node 1",
    hasBeenPublishedOnce: false,
    structureDefinition: { title: "yes" },
  },
  cursor: "cursor1",
};
const defaultPageInfo = {
  hasNextPage: false,
  endCursor: "cursor2",
  hasPreviousPage: false,
};

describe("updateQuery", () => {
  it("should return previous result if fetchMoreResult is null", () => {
    const previousResult: AdminQuery = {
      Admin: {
        Tree: {
          GetContentNodes: {
            edges: [],
            pageInfo: {
              ...defaultPageInfo,
              hasNextPage: false,
              endCursor: null,
              hasPreviousPage: false,
            },
          },
        },
      },
    };
    const result = updateQuery(previousResult, {
      // @ts-ignore
      fetchMoreResult: null,
    });
    expect(result).toEqual(previousResult);
  });

  it("should merge edges and update pageInfo when fetchMoreResult is provided", () => {
    const previousResult: AdminQuery = {
      Admin: {
        Tree: {
          GetContentNodes: {
            edges: [
              {
                ...defaultEdge,
                node: { ...defaultEdge.node, id: "1", description: "Node 1" },
              },
            ],
            pageInfo: {
              ...defaultPageInfo,
              hasNextPage: true,
              endCursor: "cursor1",
            },
          },
        },
      },
    };

    const fetchMoreResult: AdminQuery = {
      Admin: {
        Tree: {
          GetContentNodes: {
            edges: [
              {
                ...defaultEdge,
                node: { ...defaultEdge.node, id: "2", description: "Node 2" },
              },
            ],
            pageInfo: {
              ...defaultPageInfo,
              hasNextPage: false,
              endCursor: "cursor2",
            },
          },
        },
      },
    };

    const expectedResult: AdminQuery = {
      Admin: {
        Tree: {
          GetContentNodes: {
            edges: [
              {
                node: {
                  id: "1",
                  description: "Node 1",
                  hasBeenPublishedOnce: false,
                  structureDefinition: { title: "yes" },
                },
                cursor: "cursor1",
              },
              {
                ...defaultEdge,
                node: { ...defaultEdge.node, id: "2", description: "Node 2" },
              },
            ],
            pageInfo: {
              ...defaultPageInfo,
              hasNextPage: false,
              endCursor: "cursor2",
            },
          },
        },
      },
    };

    const result = updateQuery(previousResult, { fetchMoreResult });
    expect(result).toEqual(expectedResult);
  });
});

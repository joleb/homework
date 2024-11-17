import { AdminQuery } from "@/src/gql/_generated/graphql";

export const updateQuery = (
  previousResult: AdminQuery,
  { fetchMoreResult }: { fetchMoreResult: AdminQuery },
) => {
  if (!fetchMoreResult) return previousResult;
  return {
    Admin: {
      ...previousResult.Admin,
      Tree: {
        ...previousResult.Admin.Tree,
        GetContentNodes: {
          ...previousResult.Admin.Tree.GetContentNodes,
          edges: [
            ...(previousResult.Admin.Tree.GetContentNodes.edges || []),
            ...(fetchMoreResult.Admin.Tree.GetContentNodes.edges || []),
          ],
          pageInfo: fetchMoreResult.Admin.Tree.GetContentNodes.pageInfo,
        },
      },
    },
  };
};

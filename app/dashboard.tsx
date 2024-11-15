import React, { useCallback, useMemo } from "react";
import { Text, FlatList, ListRenderItemInfo, StyleSheet } from "react-native";

import { useRouter } from "expo-router";

import useGetDocumentNodes from "../hooks/useGetDocumentNodes";
import { AdminQuery } from "../gql/_generated/graphql";
import ThemedSeparator from "../components/ThemedSeparator";
import { isTruthy } from "../utils/general";
import EdgeItem from "../components/EdgeItem";
import { ContentNodeEdge } from "../types";
import Spacing from "../constants/Spacing";

const updateQuery = (
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

const Dashboard: React.FC = () => {
  const { data, loading, error, fetchMore } = useGetDocumentNodes({
    first: 10,
  });
  const router = useRouter();

  const handleLogout = () => {
    // Clear token and navigate to login
    router.push("/");
  };
  const handleLoadMore = useCallback(() => {
    if (data?.Admin?.Tree?.GetContentNodes?.pageInfo?.hasNextPage) {
      const endCursor = data.Admin.Tree.GetContentNodes.pageInfo.endCursor;
      fetchMore({
        variables: { after: endCursor, first: 10 },
        updateQuery,
      });
    }
  }, [data, fetchMore]);

  const filteredData = useMemo(
    () =>
      // Filter out nodes without a title
      data?.Admin?.Tree?.GetContentNodes?.edges
        ?.filter(isTruthy)
        .filter((edge) => !!edge?.node?.structureDefinition.title.trim()),
    [data],
  );

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<ContentNodeEdge>) => <EdgeItem item={item} />,
    [],
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading content nodes.</Text>;

  return (
    <FlatList
      data={filteredData}
      renderItem={renderItem}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.75}
      refreshing={loading}
      ListFooterComponent={loading ? <Text>Loading more...</Text> : null}
      ItemSeparatorComponent={ThemedSeparator}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  contentContainer: {
    padding: Spacing.s,
  },
});

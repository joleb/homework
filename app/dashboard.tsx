import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from "react-native";

import { useNavigation, useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import useGetDocumentNodes from "../hooks/useGetDocumentNodes";
import { AdminQuery } from "../gql/_generated/graphql";
import ThemedSeparator from "../fragments/ThemedSeparator";
import { isTruthy } from "../utils/general";
import EdgeItem from "../components/EdgeItem";
import { ContentNodeEdge } from "../types";
import Spacing from "../constants/Spacing";
import { ThemedText } from "../fragments/ThemedText";
import useHandleLogout from "../hooks/useHandleLogout";
import { useThemeColor } from "../hooks/useThemeColor";

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
  const iconColor = useThemeColor({}, "text");
  const router = useRouter();
  const navigation = useNavigation();
  const { t } = useTranslation(["general", "errorMessages"]);
  const { handleLogout } = useHandleLogout();
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={logout}>
        <Feather name="log-out" size={18} color={iconColor} />
      </TouchableOpacity>
    ),
  });
  const logout = async () => {
    await handleLogout()
      .then((success) => {
        if (!success) {
          Alert.alert(t("errorMessages:logoutFailed"));
          return;
        }
        router.push("/");
      })
      .catch((err) => {
        Alert.alert(t("errorMessages:logoutFailed"));
        console.error("Logout error:", err);
      });
  };
  const [filteredDataState, setFilteredData] = useState<ContentNodeEdge[]>([]);
  const handleLoadMore = useCallback(() => {
    if (data?.Admin?.Tree?.GetContentNodes?.pageInfo?.hasNextPage) {
      const endCursor = data.Admin.Tree.GetContentNodes.pageInfo.endCursor;
      fetchMore({
        variables: { after: endCursor, first: 10 },
        updateQuery,
      });
    }
  }, [data, fetchMore]);
  useEffect(() => {
    // Filter out nodes without a title
    const returnData = data?.Admin?.Tree?.GetContentNodes?.edges
      ?.filter(isTruthy)
      .filter((edge) => !!edge?.node?.structureDefinition.title.trim());
    setFilteredData(returnData || []);
  }, [data]);

  const handleDragEnd = ({ data }: { data: ContentNodeEdge[] }) => {
    setFilteredData(data);
  };

  const renderItem = useCallback(
    ({ item, drag, isActive }: RenderItemParams<ContentNodeEdge>) => (
      <EdgeItem item={item} drag={drag} isActive={isActive} />
    ),
    [],
  );

  if (loading)
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={"large"} />
        <ThemedText type="defaultSemiBold">{t("general:loading")}</ThemedText>
      </View>
    );
  if (error)
    return (
      <ThemedText type="defaultSemiBold">
        {t("errorMessages:loadingContentNodes")}
      </ThemedText>
    );

  return (
    <SafeAreaView edges={["bottom", "left", "right"]}>
      <DraggableFlatList
        data={filteredDataState}
        renderItem={renderItem}
        keyExtractor={(item, index) =>
          item?.node?.id ?? "draggable-item-" + index
        }
        onDragEnd={handleDragEnd}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.75}
        refreshing={loading}
        ItemSeparatorComponent={ThemedSeparator}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  contentContainer: {
    padding: Spacing.s,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

import { useNavigation } from "expo-router";
import { useTranslation } from "react-i18next";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import useGetDocumentNodes from "@/src/hooks/useGetDocumentNodes";
import ThemedSeparator from "@/src/fragments/ThemedSeparator";
import { isTruthy } from "@/src/utils/general";
import EdgeItem from "@/src/components/EdgeItem";
import { ContentNodeEdge } from "@/src/types";
import Spacing from "@/src/constants/Spacing";
import { ThemedText } from "@/src/fragments/ThemedText";
import LogoutHeaderButton from "@/src/components/LogoutHeaderButton";
import { useAuth } from "@/src/components/provider/AuthProvider";
import Spacer from "@/src/fragments/Spacer";
import { useThemeColor } from "@/src/hooks/useThemeColor";
import { updateQuery } from "@/src/utils/dashboard";

const AMOUNT_OF_NODES_TO_FETCH = 10;

const Dashboard: React.FC = () => {
  const { data, loading, error, fetchMore } = useGetDocumentNodes({
    first: AMOUNT_OF_NODES_TO_FETCH,
  });
  const errorColor = useThemeColor({}, "error");
  const navigation = useNavigation();
  const { t } = useTranslation(["general", "errorMessages"]);
  const { userName } = useAuth();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutHeaderButton />,
      title: t("general:loggedInAs", { name: userName }),
    });
  }, [navigation, t, userName]);

  const [filteredDataState, setFilteredData] = useState<ContentNodeEdge[]>([]);

  const handleLoadMore = useCallback(() => {
    if (data?.Admin?.Tree?.GetContentNodes?.pageInfo?.hasNextPage) {
      const endCursor = data.Admin.Tree.GetContentNodes.pageInfo.endCursor;
      fetchMore({
        variables: { after: endCursor, first: AMOUNT_OF_NODES_TO_FETCH },
        updateQuery,
      });
    }
  }, [data, fetchMore]);

  useEffect(() => {
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

  if (loading) {
    return (
      <View style={styles.alertContainer}>
        <ActivityIndicator size="large" />
        <Spacer />
        <ThemedText type="defaultSemiBold">{t("general:loading")}</ThemedText>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.alertContainer}>
        <Feather name="alert-triangle" size={32} color={errorColor} />
        <Spacer />
        <ThemedText type="defaultSemiBold">
          {t("errorMessages:loadingContentNodes")}
        </ThemedText>
      </View>
    );
  }

  return (
    <SafeAreaView edges={["bottom", "left", "right"]}>
      <DraggableFlatList
        data={filteredDataState}
        renderItem={renderItem}
        keyExtractor={(item, index) =>
          item?.node?.id ?? `draggable-item-${index}`
        }
        onDragEnd={handleDragEnd}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.75}
        refreshing={loading}
        ItemSeparatorComponent={ThemedSeparator}
        contentContainerStyle={styles.contentContainer}
        initialNumToRender={AMOUNT_OF_NODES_TO_FETCH}
        testID="dashboard_list"
      />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: Spacing.s,
    paddingHorizontal: Spacing.m,
  },
  alertContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

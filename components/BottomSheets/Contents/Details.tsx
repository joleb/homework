import React from "react";
import { StyleSheet } from "react-native";

import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";

import { ThemedText } from "../../ThemedText";
import { ContentNodeEdge } from "../../../types";
import { stripHtml } from "../../../utils/general";

interface DetailsBottomSheetContentProps {
  item: ContentNodeEdge;
}
const DetailsBottomSheetContent: React.FC<DetailsBottomSheetContentProps> = ({
  item,
}) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <BottomSheetScrollView
      contentContainerStyle={{
        marginBottom: bottom,
        ...styles.container,
      }}
    >
      <Image
        source={{
          uri: item?.node.image?.url || undefined,
          cacheKey: item?.node.image?.id || undefined,
        }}
        cachePolicy={"memory"}
        allowDownscaling={false}
        contentFit="cover"
        priority={"high"}
        style={{
          height: 200,
        }}
      />
      <ThemedText style={{ fontWeight: "bold" }}>
        {item?.node.structureDefinition.title}
      </ThemedText>
      <ThemedText>{stripHtml(item?.node.description)}</ThemedText>
    </BottomSheetScrollView>
  );
};
export default DetailsBottomSheetContent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
});

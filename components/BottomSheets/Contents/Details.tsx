import React from "react";
import { StyleSheet } from "react-native";

import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";

import { ThemedText } from "../../../fragments/ThemedText";
import { ContentNodeEdge } from "../../../types";
import { stripHtml } from "../../../utils/general";
import Spacing from "../../../constants/Spacing";
import Spacer from "../../../fragments/Spacer";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

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
        transition={600}
        style={styles.image}
        placeholder={{ blurhash }}
      />
      <Spacer />
      <ThemedText type="title">
        {item?.node.structureDefinition.title}
      </ThemedText>
      <ThemedText>{stripHtml(item?.node.description)}</ThemedText>
    </BottomSheetScrollView>
  );
};

export default DetailsBottomSheetContent;

const styles = StyleSheet.create({
  container: {
    padding: Spacing.l,
    paddingBottom: Spacing.xL,
  },
  image: {
    height: 200,
    borderRadius: 22,
  },
});

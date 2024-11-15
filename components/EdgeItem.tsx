import { Pressable, StyleSheet, View } from "react-native";
import { useRef } from "react";

import { Image } from "expo-image";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import { ContentNodeEdge } from "../types";
import Spacer from "../fragments/Spacer";

import DetailsBottomSheetContent from "./BottomSheets/Contents/Details";
import BottomSheetWithChildren from "./BottomSheets/WithChildren";
import { ThemedText } from "./ThemedText";

import Tag from "@/fragments/Tag";
import { stripHtml } from "@/utils/general";
import Spacing from "@/constants/Spacing";

const imageSize = {
  width: 75,
  height: 75,
} as const;

const EdgeItem: React.FC<{ item: ContentNodeEdge }> = ({ item }) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  return (
    <>
      <Pressable
        key={item?.node.id}
        style={styles.pressableContainer}
        onPress={() => bottomSheetRef.current?.present()}
      >
        <View style={styles.text}>
          <ThemedText type="defaultSemiBold">
            {item?.node.structureDefinition.title.trim()}
          </ThemedText>
          <ThemedText numberOfLines={3} type="small">
            {stripHtml(item?.node.description)}
          </ThemedText>
        </View>
        <View style={[styles.image]}>
          <Image
            source={{
              uri: item?.node.image?.thumbnail || undefined,
              cacheKey: item?.node.image?.thumbnailKey || undefined,
            }}
            cachePolicy={"memory-disk"}
            style={styles.image}
            contentFit="cover"
            contentPosition="center"
          />
        </View>
      </Pressable>
      {!item?.node.hasBeenPublishedOnce && (
        <>
          <Tag label="Not published" variant="warning" />
          <Spacer />
        </>
      )}

      <BottomSheetWithChildren ref={bottomSheetRef} accessible={false}>
        <DetailsBottomSheetContent item={item} />
      </BottomSheetWithChildren>
    </>
  );
};

export default EdgeItem;

const styles = StyleSheet.create({
  pressableContainer: {
    paddingHorizontal: Spacing.xS,
    paddingVertical: Spacing.s,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: Spacing.s,
  },
  text: {
    flex: 1,
  },
  image: {
    height: imageSize.height,
    width: imageSize.width,
    borderRadius: 15,
    alignSelf: "flex-start",
  },
});

import {
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
  View,
} from "react-native";
import { useCallback, useRef } from "react";

import { Image } from "expo-image";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import { ContentNodeEdge } from "../types";

import DetailsBottomSheetContent from "./BottomSheets/Contents/Details";
import BottomSheetWithChildren from "./BottomSheets/WithChildren";

import Spacer from "@/src/fragments/Spacer";
import { ThemedText } from "@/src/fragments/ThemedText";
import Tag from "@/src/fragments/Tag";
import { stripHtml } from "@/src/utils/general";
import Spacing from "@/src/constants/Spacing";

const imageSize = {
  width: 75,
  height: 75,
} as const;

const EdgeItem: React.FC<{
  item: ContentNodeEdge;
  drag: () => void;
  isActive: boolean;
}> = ({ item, drag, isActive }) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const onPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, [bottomSheetRef]);

  const pressableStyles = useCallback(
    (state: PressableStateCallbackType) => {
      return StyleSheet.flatten([
        {
          opacity: state.pressed || isActive ? 0.5 : 1,
        },
        styles.pressableContainer,
      ]);
    },
    [isActive],
  );

  return (
    <>
      <Pressable
        key={item?.node.id}
        style={pressableStyles}
        onPress={onPress}
        disabled={isActive}
        onLongPress={drag}
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

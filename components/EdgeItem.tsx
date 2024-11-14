import { Pressable } from "react-native";
import { useRef } from "react";

import { Image } from "expo-image";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import { ContentNodeEdge } from "../types";

import DetailsBottomSheetContent from "./BottomSheets/Contents/Details";
import BottomSheetWithChildren from "./BottomSheets/WithChildren";
import { ThemedText } from "./ThemedText";

const imageSize = {
  width: 80,
  height: 50,
} as const;

const EdgeItem: React.FC<{ item: ContentNodeEdge }> = ({ item }) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  return (
    <>
      <Pressable
        key={item?.node.id}
        style={{ flexDirection: "row", alignContent: "center" }}
        onPress={() => bottomSheetRef.current?.present()}
      >
        <Image
          source={{
            uri: item?.node.image?.thumbnail || undefined,
            cacheKey: item?.node.image?.thumbnailKey || undefined,
          }}
          contentFit="cover"
          placeholder={{
            uri: `https://placehold.co/${imageSize.width}x${imageSize.height}`,
            blurhash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
          }}
          cachePolicy={"memory-disk"}
          style={{
            height: imageSize.height,
            width: imageSize.width,
          }}
        />
        <ThemedText numberOfLines={1}>
          {item?.node.structureDefinition.title}
        </ThemedText>
      </Pressable>

      <BottomSheetWithChildren ref={bottomSheetRef} accessible={false}>
        <DetailsBottomSheetContent item={item} />
      </BottomSheetWithChildren>
    </>
  );
};

export default EdgeItem;

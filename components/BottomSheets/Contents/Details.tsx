import React from "react";
import { StyleSheet, View } from "react-native";

import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";

import { ThemedText } from "../../../fragments/ThemedText";
import { ContentNodeEdge } from "../../../types";
import { stripHtml } from "../../../utils/general";
import Spacing from "../../../constants/Spacing";
import Spacer from "../../../fragments/Spacer";
import {
  CreateStylesColors,
  useThemeAwareStyles,
} from "../../../hooks/useThemeAwareStyles";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@aasdasdyfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

interface DetailsBottomSheetContentProps {
  item: ContentNodeEdge;
}
const DetailsBottomSheetContent: React.FC<DetailsBottomSheetContentProps> = ({
  item,
}) => {
  const { bottom } = useSafeAreaInsets();
  const styles = useThemeAwareStyles(createStyles);
  return (
    <BottomSheetScrollView
      contentContainerStyle={{
        marginBottom: bottom,
        ...styles.container,
      }}
    >
      {item?.node.image?.url && (
        <View style={styles.imageContainer}>
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
        </View>
      )}
      <Spacer size={Spacing.l} />
      <ThemedText type="title">
        {item?.node.structureDefinition.title}
      </ThemedText>
      <ThemedText>{stripHtml(item?.node.description)}</ThemedText>
    </BottomSheetScrollView>
  );
};

export default DetailsBottomSheetContent;

const createStyles = (colors: CreateStylesColors) =>
  StyleSheet.create({
    container: {
      padding: Spacing.l,
      paddingBottom: Spacing.xL,
    },
    imageContainer: {
      borderRadius: 22,
      borderColor: colors.border,
      shadowColor: colors.cardShadow,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,

      elevation: 12,
    },
    image: {
      height: 200,
      borderRadius: 22,
    },
  });

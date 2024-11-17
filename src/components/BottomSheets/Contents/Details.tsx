import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { BottomSheetView } from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";

import { ThemedText } from "@/src/fragments/ThemedText";
import { ContentNodeEdge } from "@/src/types";
import { stripHtml } from "@/src/utils/general";
import Spacing from "@/src/constants/Spacing";
import Spacer from "@/src/fragments/Spacer";
import {
  CreateStylesColors,
  useThemeAwareStyles,
} from "@/src/hooks/useThemeAwareStyles";

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
  // we cant use BottomSheetScrollView with the latest version of expo, so we use ScrollView nested in a view instead
  // see: https://github.com/gorhom/react-native-bottom-sheet/issues/2035
  return (
    <BottomSheetView
      style={{
        marginBottom: bottom,
      }}
    >
      <ScrollView style={styles.container}>
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
              testID="bottom_sheet_image"
            />
          </View>
        )}
        <Spacer size={Spacing.l} />
        <ThemedText type="title" testID="bottom_sheet_title">
          {item?.node.structureDefinition.title}
        </ThemedText>
        <ThemedText testID="bottom_sheet_description">
          {stripHtml(item?.node.description)}
        </ThemedText>
      </ScrollView>
    </BottomSheetView>
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

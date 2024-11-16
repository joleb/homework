import React, { useCallback, useImperativeHandle } from "react";
import { Platform, StyleSheet } from "react-native";

import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProps,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FullWindowOverlay } from "react-native-screens";

import {
  CreateStylesColors,
  useThemeAwareStyles,
} from "../../hooks/useThemeAwareStyles";

export const AppFullWindowOverlay = ({
  children,
}: {
  children?: React.ReactNode;
}) =>
  Platform.OS === "ios" ? (
    <FullWindowOverlay>{children}</FullWindowOverlay>
  ) : (
    <>{children}</>
  );
const renderBackdrop = (bottomSheetProps: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop
    {...bottomSheetProps}
    disappearsOnIndex={-1}
    appearsOnIndex={0}
  />
);

const BottomSheetWithChildren = React.forwardRef(
  (
    {
      snapPoints = [],
      backdropComponent = renderBackdrop,
      enableDynamicSizing = true,
      index = 0,
      children,
      onBeforeDismiss,
      onAnimate,
      ...props
    }: React.PropsWithChildren<BottomSheetModalProps & { testID?: string }> & {
      onBeforeDismiss?: () => void;
    },
    ref,
  ) => {
    const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
    const { top: safeAreaTopInset } = useSafeAreaInsets();
    const styles = useThemeAwareStyles(createStyles);

    useImperativeHandle(ref, () => ({
      present: () => {
        bottomSheetModalRef.current?.present();
      },
      dismiss: () => {
        bottomSheetModalRef.current?.dismiss();
      },
    }));

    return (
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={index}
        enableDynamicSizing={enableDynamicSizing}
        snapPoints={snapPoints}
        topInset={safeAreaTopInset}
        onAnimate={useCallback(
          (fromIndex: number, toIndex: number) => {
            if (toIndex === -1) {
              onBeforeDismiss?.();
            }

            onAnimate?.(fromIndex, toIndex);
          },
          [onBeforeDismiss, onAnimate],
        )}
        backdropComponent={backdropComponent ?? renderBackdrop}
        containerComponent={AppFullWindowOverlay}
        backgroundStyle={styles.backgroundStyle}
        handleIndicatorStyle={styles.handleStyle}
        {...props}
      >
        {children}
      </BottomSheetModal>
    );
  },
);

BottomSheetWithChildren.displayName = "BottomSheetWithChildren";

const createStyles = (colors: CreateStylesColors) =>
  StyleSheet.create({
    backgroundStyle: {
      backgroundColor: colors.cardBackground,
    },
    handleStyle: {
      backgroundColor: colors.border,
    },
  });

export default BottomSheetWithChildren;

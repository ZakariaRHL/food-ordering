import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { forwardRef, useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BottomSheetMod = forwardRef((props, ref) => {

  const snapPoints = useMemo(() => ['50%'], []);

  const renderBackDrop = useCallback((props) => {
    <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props}/>
  },[])

  return (

      <BottomSheetModal
              ref={ref}
              overDragResistanceFactor={0}
              backdropComponent={renderBackDrop}
              snapPoints={snapPoints}
      >
        <View>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheetModal>

  );
});

export default BottomSheetMod;
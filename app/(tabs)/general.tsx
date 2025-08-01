// screens/GeneralScreen.tsx
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

export default function General() {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: colors.text, fontSize: 20 }}>General Screen</Text>
    </View>
  );
}

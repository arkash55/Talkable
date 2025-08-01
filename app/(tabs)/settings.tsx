import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

export default function Settings() {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: colors.text, fontSize: 20 }}>Settings Screen</Text>
    </View>
  );
}

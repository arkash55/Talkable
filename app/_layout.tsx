import { ThemeProvider, useTheme } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthProvider } from "./context/AuthContext";
import { DarkTheme, LightTheme } from './themes/theme';

export default function RootLayout() {
  const colorScheme = useColorScheme(); 
  const theme = useMemo(
    () => (colorScheme === 'dark' ? DarkTheme : LightTheme),
    [colorScheme]
  );

  return (
    <ThemeProvider value={theme}>
      <ThemedRoot />
    </ThemeProvider>
  );
}



function ThemedRoot() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AuthProvider>
    </SafeAreaView>
  );
}

// app/_layout.tsx
import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DarkTheme, LightTheme } from './themes/theme';

export default function RootLayout() {
  const colorScheme = useColorScheme(); 

  return (
    <SafeAreaView>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : LightTheme}>
        <Stack screenOptions={{ headerShown: false }}/>
      </ThemeProvider>
    </SafeAreaView>

  );
}

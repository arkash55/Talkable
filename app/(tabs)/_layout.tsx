// app/(tabs)/_layout.tsx
import { Ionicons } from '@expo/vector-icons';
import { Redirect, Tabs } from 'expo-router';
import { ActivityIndicator, useColorScheme, View } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    const { user, loading } = useAuth();

    if (loading) {
        return (
        <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" />
        </View>
        );
    }

    if (!user) {
        return <Redirect href="/(auth)/login" />;
    }

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';
          if (route.name === 'index') iconName = 'home';
          else if (route.name === 'general') iconName = 'options';
          else if (route.name === 'settings') iconName = 'settings';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colorScheme === 'dark' ? '#fff' : '#000',
      })}
    />
  );
}

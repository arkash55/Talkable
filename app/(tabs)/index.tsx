
import { useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';

export default function Home() {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: colors.text }}>Home Page</Text>
    </View>
  );
}

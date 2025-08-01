
import { useTheme } from '@react-navigation/native';
import { Alert, Button, Text, View } from 'react-native';
import { signOutUser } from '../services/authService';

export default function Settings() {
  const { colors } = useTheme();

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error: any) {
      Alert.alert('Error', 'Failed to sign out. Please try again.');
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: colors.text, fontSize: 20, marginBottom: 20 }}>Settings Screen</Text>
      <Button title="Sign Out" onPress={handleSignOut} color={colors.primary} />
    </View>
  );
}

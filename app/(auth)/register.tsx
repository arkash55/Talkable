
import { useTheme } from '@react-navigation/native';
import { router } from 'expo-router';
import { Formik } from 'formik';
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';
import { signUpUser } from '../services/authService';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'At least 6 characters').required('Required'),
});

export default function RegisterScreen() {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20, color: colors.text }}>Register</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={RegisterSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await signUpUser(values.email, values.password);
            Alert.alert('Success', 'Account created! You can now log in.');
            // router.replace('/(auth)/login');
          } catch (error: any) {
            Alert.alert('Registration Failed', error.message);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
          <>
            <TextInput
              placeholder="Email"
              placeholderTextColor={colors.border}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              autoCapitalize="none"
              style={{
                borderBottomWidth: 1,
                borderColor: colors.border,
                marginBottom: 10,
                color: colors.text,
              }}
            />
            {touched.email && errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

            <TextInput
              placeholder="Password"
              placeholderTextColor={colors.border}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              style={{
                borderBottomWidth: 1,
                borderColor: colors.border,
                marginBottom: 10,
                color: colors.text,
              }}
            />
            {touched.password && errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

            <Button onPress={handleSubmit} title="Register" disabled={isSubmitting} />

            <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
              <Text style={{ marginTop: 20, color: colors.primary }}>
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

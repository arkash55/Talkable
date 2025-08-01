import { Formik } from 'formik';
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';

import { useTheme } from '@react-navigation/native';
import { router } from 'expo-router';
import { signInUser } from '../services/authService';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short!').required('Required'),
});

export default function LoginScreen() {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20, color: colors.text }}>Login</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await signInUser(values.email, values.password);
            // router.replace('/');
          } catch (error: any) {
            Alert.alert('Login Failed', error.message);
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

            <Button onPress={handleSubmit} title="Login" disabled={isSubmitting} />

            <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
              <Text style={{ marginTop: 20, color: colors.primary }}>
                Don't have an account? Register
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

import { useMutation } from '@apollo/client';
import * as SecureStore from 'expo-secure-store';
import { LOGIN_MUTATION } from '../gql/mutations';
import { useRouter } from 'expo-router';

export const useHandleLogin = () => {
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);
  const router = useRouter();

  const handleLogin = async ({ email, password }: { email: string; password: string; }) => {
    try {
      const { data } = await login({
        variables: {
          input: { email, password },
        },
      });

      if (!data || !data.Auth?.loginJwt) {
        throw new Error('Login failed');
      }

      const { accessToken, refreshToken } = data.Auth.loginJwt.loginResult.jwtTokens; 
      await SecureStore.setItemAsync('accessToken', accessToken);
      await SecureStore.setItemAsync('refreshToken', refreshToken);
      router.navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return { loading, error, handleLogin };
};
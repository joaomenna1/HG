import { ThemeProvider } from 'styled-components/native';
import { Slot, useRouter } from 'expo-router';
import { useAuthStore } from '../store/authStore';
import Loading from '../components/Loading';
import theme from '../theme';
import { useEffect } from 'react';

const Layout = () => {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuthStore();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace('/(auth)/onboarding/');
    }
  }, [loading, isAuthenticated]);

  if (loading) {
    return <Loading size={56} color="primary" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Slot />
    </ThemeProvider>
  );
};

export default Layout;

import { Slot, Redirect } from 'expo-router';

const Layout = () => {
  const { signed, loading } = useAuthStore();

  if (loading) {
    return <Loading size={56} color="primary" />;
  }

  if (signed) {
    return <Slot />;
  } else {
    return <Redirect href="/auth/onboarding" />;
  }
};

export default Layout;

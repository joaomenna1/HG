import create from 'zustand';

interface AuthState {
  signed: boolean;
  loading: boolean;
  signIn: () => void;
  signOut: () => void;
  setLoading: (loading: boolean) => void;
}

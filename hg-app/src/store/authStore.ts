import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loadStoredAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false,


  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post('/user/login', { email, password });

      if (response.status === 200) {
        const { id, name, email, token } = response.data;

    
        set({
          user: { id, name, email },
          token,
          isAuthenticated: true,
        });

  
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        await AsyncStorage.setItem('authToken', token);
        await AsyncStorage.setItem(
          'user',
          JSON.stringify({ id, name, email })
        );
      }
    } catch (error: any) {
      set({ error: error.response?.data?.message || 'Erro ao autenticar usuário' });
    } finally {
      set({ loading: false });
    }
  },


  logout: async () => {
    set({ user: null, token: null, isAuthenticated: false });
    delete axios.defaults.headers.common['Authorization'];

    await AsyncStorage.removeItem('authToken');
    await AsyncStorage.removeItem('user');
  },

  loadStoredAuth: async () => {
    set({ loading: true });
    try {
      const storedToken = await AsyncStorage.getItem('authToken');
      const storedUser = await AsyncStorage.getItem('user');

      if (storedToken && storedUser) {
        const user = JSON.parse(storedUser);

        set({
          user,
          token: storedToken,
          isAuthenticated: true,
        });

        axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      }
    } catch (error) {
      console.error('Erro ao carregar dados armazenados:', error);
    } finally {
      set({ loading: false });
    }
  },
}));

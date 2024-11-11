import { create } from 'zustand';
import Api from '../api/api';

interface User {
  name: string;
  email: string;
  password: string;
}

interface UserState {
  loading: boolean;
  error: string | null;
  success: boolean;
  createUser: (user: User) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  loading: false,
  error: null,
  success: false,

  createUser: async (user) => {
    set({ loading: true, error: null, success: false });
    try {
      const response = await Api.post('/user/create-user', user);

      if (response.status === 201) {
        set({ success: true });
      }
    } catch (error: any) {
      set({ error: error.response?.data?.message || 'Erro ao criar usuário' });
    } finally {
      set({ loading: false });
    }
  },
}));

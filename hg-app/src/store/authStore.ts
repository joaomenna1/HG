import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Api from "../api/api";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  access_token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
}
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  access_token: null,
  loading: false,
  error: null,
  isAuthenticated: false,

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const response = await Api.post("/sign-in", { email, password });
      
      if (response.status === 200) {
        const { access_token } = response.data;
  
        if (access_token) {
          set({
            access_token,
            isAuthenticated: true,
          });
  
          Api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
  
          await AsyncStorage.setItem("authToken", access_token);
        }
      }
    } catch (error: any) {
      console.log("Erro ao autenticar:", error);
  
      if (axios.isAxiosError(error) && error.response) {
        set({ error: error.response.data?.message || "Erro na autenticação" });
      } else {
        set({ error: "Erro desconhecido ao fazer login" });
      }
    } finally {
      set({ loading: false });
    }
  }
}));

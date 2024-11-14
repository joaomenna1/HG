import { create } from "zustand";
import Api from "../api/api";

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
      const response = await Api.post("/users/create-user", user);
      console.log("Dados enviados:", user);

      if (response.status === 201) {
        set({ success: true });
      }
    } catch (error: any) {
      if (error.response) {
        console.log("Status da resposta:", error.response.status);
        console.log(
          "Dados da resposta:",
          JSON.stringify(error.response.data)
        );
        console.log("Cabeçalhos da resposta:", error.response.headers);
        set({ error: error.response.data?.message || "Erro ao criar usuário" });
      } else if (error.request) {

        set({ error: "Nenhuma resposta do servidor" });
      } else {
        console.log("Erro ao configurar a requisição:", error.message);
        set({ error: "Erro de configuração da requisição" });
      }
    } finally {
      set({ loading: false });
    }
  },
}));

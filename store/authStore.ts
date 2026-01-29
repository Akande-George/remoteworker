import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  selectedPlanId: string | null;

  setUser: (user: User, token: string) => void;
  clearUser: () => void; // Added back
  setSelectedPlanId: (planId: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      selectedPlanId: null,

      setUser: (user, token) => {
        set({ user, token, isAuthenticated: true });
      },

      // Used by AuthContext.logout() to clean up local state
      clearUser: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          selectedPlanId: null,
        });
      },

      setSelectedPlanId: (planId) => set({ selectedPlanId: planId }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        selectedPlanId: state.selectedPlanId,
      }),
    },
  ),
);

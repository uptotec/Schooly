import create from 'zustand'

type logoutStore = {
  logout: (() => void) | undefined;
  setLogout: (logout: () => void) => void
}

export const useLogoutStore = create<logoutStore>(set => ({
  logout: undefined,
  setLogout: (logout) => set({logout}),
}))
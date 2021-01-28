import create from 'zustand'

type loginStore = {
  userType: string | undefined;
  setUserType: (type: string) => void;
}

export const useLoginStore = create<loginStore>(set => ({
  userType: undefined,
  setUserType: (type) => set({userType: type}),
}))
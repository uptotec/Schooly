import create from 'zustand'

type userStore = {
  userType: 'student' | 'staff';
  loggedIn: boolean;
  setUserType: (type: 'student' | 'staff') => void;
  setLoggedIn: (status: boolean) => void;
}

export const useUserStore = create<userStore>(set => ({
  userType: 'student',
  loggedIn: false,
  setUserType: (type) => set({userType: type}),
  setLoggedIn: (status) => set({loggedIn: status}),
}))
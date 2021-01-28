import create from 'zustand'

type userStore = {
  userType: 'student' | 'staff';
  loggedIn: boolean;
  email: string | null;
  staffId: number | null;
  studentId: number | null;
  setUserType: (type: 'student' | 'staff') => void;
  setLoggedIn: (isLoggedIn:boolean) => void;
  setEmail: (email:string) => void;
  setStaffId: (staffId:number) => void;
  setStudentId: (studentId:number) => void;
}

export const useUserStore = create<userStore>(set => ({
  userType: 'student',
  loggedIn: false,
  email: null,
  staffId: null,
  studentId: null, 
  setUserType: (type) => set({userType: type}),
  setLoggedIn: (isLoggedIn) => set({loggedIn: isLoggedIn}),
  setEmail: (email) => set({email}),
  setStaffId: (staffId) => set({staffId}),
  setStudentId: (studentId) => set({studentId}),
  
}))
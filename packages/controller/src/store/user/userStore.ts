import create from 'zustand'

type userStore = {
  userType: string | undefined;
  loggedIn: boolean;
  email: string | null| undefined;
  staffId: number | null| undefined;
  studentId: number | null| undefined;
  setUserType: (type: string) => void;
  setLoggedIn: (isLoggedIn:boolean) => void;
  setEmail: (email:string) => void;
  setStaffId: (staffId:number) => void;
  setStudentId: (studentId:number) => void;
  setData: (data : {userType: string,loggedIn:boolean, email: string, staffId: number | null| undefined, studentId: number | null| undefined}) => void;
}

export const useUserStore = create<userStore>(set => ({
  userType: undefined,
  loggedIn: false,
  email: undefined,
  staffId: undefined,
  studentId: undefined, 
  setUserType: (type) => set({userType: type}),
  setLoggedIn: (isLoggedIn) => set({loggedIn: isLoggedIn}),
  setEmail: (email) => set({email}),
  setStaffId: (staffId) => set({staffId}),
  setStudentId: (studentId) => set({studentId}),
  setData: (data) => set({...data}),
}))
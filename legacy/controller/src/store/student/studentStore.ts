import create from 'zustand';
import { Student } from '../../generated/graphql';

type studentStore = {
  meStudent: Student | null | undefined;
  setStudent: (student: Student | null) => void;
};

export const useStudentStore = create<studentStore>((set) => ({
  meStudent: null,
  setStudent: (student) => set({ meStudent: student }),
}));

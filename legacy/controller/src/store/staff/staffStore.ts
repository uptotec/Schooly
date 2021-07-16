import create from 'zustand';
import { Staff } from '../../generated/graphql';

type staffStore = {
  meStaff: Staff | null | undefined;
  setStaff: (student: Staff | null) => void;
  refetchStaff: any;
  setRefetchStaff: (fn: any) => void;
};

export const useStaffStore = create<staffStore>((set) => ({
  meStaff: null,
  setStaff: (staff) => set({ meStaff: staff }),
  refetchStaff: null,
  setRefetchStaff: (fn) => set({ refetchStaff: fn }),
}));

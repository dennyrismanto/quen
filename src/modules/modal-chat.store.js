import create from "zustand";

export const useModalChat = create((set) => ({
  shown: false,
  toggleNav: () =>
    set((state) => ({
      shown: !state.shown,
    })),
}));

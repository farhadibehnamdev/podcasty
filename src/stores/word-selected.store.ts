import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type WordSelected = {
  wid: number;
};

export type WordSelectedState = {
  words: WordSelected[];
  addSelectedWord: (word: WordSelected) => void;
};

export const useUserSelectedWordStore = create<WordSelectedState>()(
  devtools((set) => ({
    words: [],
    addSelectedWord: (word: WordSelected) => {
      set((state) => ({
        words: [...state.words, { ...word }],
      }));
    },
  }))
);

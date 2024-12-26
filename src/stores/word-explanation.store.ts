import { create } from "zustand";
import { devtools } from "zustand/middleware";

type WordExplanation = {
  wid: number;
  word: string;
};

type WordExplanationState = {
  word: WordExplanation;
  setWordExplanation: (word: WordExplanation) => void;
};

export const useWordExplanationStore = create<WordExplanationState>()(
  devtools((set) => ({
    word: {},
    setWordExplanation: (word: WordExplanation) => {
      set(() => ({
        word: { ...word },
      }));
    },
  }))
);

import { SentenseWords } from "@/types/episode.interface";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type WordSelectedState = {
	words: SentenseWords[];
	addSelectedWord: (word: SentenseWords) => void;
};

export const useUserSelectedWordStore = create<WordSelectedState>()(
	devtools((set) => ({
		words: [],
		addSelectedWord: (word: SentenseWords) => {
			set((state) => ({
				words: [...state.words, { ...word }],
			}));
		},
	})),
);

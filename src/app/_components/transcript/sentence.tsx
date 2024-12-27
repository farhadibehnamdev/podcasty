import { Sentense, SentenseWords } from "@/types/episode.interface";
import { Word } from "./word";

export const Sentence = ({
  sentence,
  isActive,
  handleWordClick,
  activeRef,
}: {
  sentence: Sentense;
  isActive: boolean;
  handleWordClick: (word: SentenseWords, sentence: Sentense) => void;
  activeRef: React.RefObject<HTMLDivElement>;
}) => (
  <div
    className={`p-1 text-lg text-center ${
      isActive ? "font-semibold bg-zinc-400 rounded-md" : ""
    }`}
    ref={isActive ? activeRef : null}
  >
    <p className="text-black p-3 select-none underline-offset-1">
      {sentence.sentense_words.map((word, wordIndex) => (
        <Word
          key={`${sentence.sentense_id}-${wordIndex}`}
          word={word}
          handleClick={() => handleWordClick(word, sentence)}
        />
      ))}
    </p>
  </div>
);

import { useUserSelectedWordStore } from "@/stores/word-selected.store";
import { SentenseWords } from "@/types/episode.interface";

export const Word = ({
  word,
  handleClick,
}: {
  word: SentenseWords;
  handleClick: () => void;
}) => {
  const { words } = useUserSelectedWordStore();
  const isSelected = words.some(
    (item) => item?.wid === word?.word?.wid || item?.wid === word?.phrase?.wid
  );

  const wordClasses = `
      ${
        isSelected
          ? "text-blue-500 font-semibold"
          : word.text === " "
          ? ""
          : "hover:bg-blue-400"
      }
      cursor-pointer p-2 px-[0.5px] rounded
    `;

  return (
    <span className={wordClasses} onClick={handleClick}>
      {word?.phrase?.wid
        ? word.phrase.content.map((phrase, index) => (
            <span key={index}>{phrase?.word?.text || phrase?.text}</span>
          ))
        : word?.word?.text || word?.text}
    </span>
  );
};

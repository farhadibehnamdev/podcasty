import type { Sentense, SentenseWords } from "@/types/episode.interface";
import { ScrollShadow } from "@nextui-org/react";
import {
  useActiveTextCues,
  useActiveTextTrack,
  useMediaPlayer,
} from "@vidstack/react";
import React, { useContext } from "react";
import { Virtuoso } from "react-virtuoso";
import { useUserSelectedWordStore } from "@/stores/word-selected.store";
import { DrawerContext } from "@/context";
import { usePathname } from "next/navigation";
import { formSentense, formWordPhrase } from "@/utils/form-sentence";
import { useSyncUserWord } from "@/hooks/useSyncUserWord";
import { useSetWordStatus } from "@/hooks/useSetWordStatus";
import { WordsSelected } from "@/types/words-selected.interface";
import { useExplainWord } from "@/hooks/useExplainWord"; //--TODO:Let’s refactor the code to reduce technical debt.
export const Transcript = ({ transcript }: { transcript: Sentense[] }) => {
  const router = usePathname();
  const [ctype, id] = router.split(/[ /]+/).filter(Boolean);
  const activeTextTrack = useActiveTextTrack("captions");
  const activeCues = useActiveTextCues(activeTextTrack);
  const player = useMediaPlayer();
  const [allCue, setAllCues] = React.useState<VTTCue[]>([]);
  const activeRef = React.useRef<HTMLDivElement>(null);
  const { addSelectedWord, words } = useUserSelectedWordStore((state) => state);
  const { onOpen } = useContext(DrawerContext);
  const { data: response } = useSyncUserWord(Number(id));
  const { mutate } = useSetWordStatus();
  const { mutate: mutateWordExp, status: wordExpStatus } = useExplainWord();
  React.useEffect(() => {
    if (response) {
      response?.data?.forEach((element: any) => {
        addSelectedWord({ wid: element.word_id });
      });
    }
  }, [response, addSelectedWord]);
  // Get all cues when text track is loaded
  React.useEffect(() => {
    if (activeTextTrack) {
      setAllCues(Array.from(activeTextTrack.cues || []) as VTTCue[]);
    }
  }, [activeTextTrack]);

  // Auto-scroll to active cue
  React.useEffect(() => {
    if (activeCues.length > 0 && activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeCues]);

  const handleWordClick = React.useCallback(
    (word: SentenseWords, sentence: Sentense) => {
      if (player) {
        if (word?.word?.wid) {
          console.log("first :: ");
          player.pause();
          onOpen();
          addSelectedWord({ wid: word?.word?.wid });
          const data = {
            wid: word.word.wid,
            sentense: formSentense(sentence.sentense_words),
            start_time: sentence.start_time_sec,
            end_time: sentence.end_time_sec,
            cid: id,
            ctype: ctype,
          } as WordsSelected;
          mutate({ id: Number(id), userWord: data });

          mutateWordExp({
            currentSentense: formSentense(sentence.sentense_words),
            topic: "",
            word: word.word.text,
            nextSentense: formSentense(
              transcript[sentence.sentense_id + 1].sentense_words
            ),
            perviousSentense: formSentense(
              transcript[sentence.sentense_id - 1].sentense_words
            ),
            content_type: ctype,
            content_id: Number(id),
          });
          // addOrUpdateWordById({ wordSelected: data }); //TODO: add word in indexeddb storage
        } else if (word?.phrase?.wid) {
          console.log("word phrase :: ", word.phrase);
          player.pause();
          addSelectedWord({ wid: word.phrase.wid });
          onOpen();

          const data = {
            wid: word.phrase.wid,
            sentense: formSentense(sentence.sentense_words),
            start_time: sentence.start_time_sec,
            end_time: sentence.end_time_sec,
            cid: id,
            ctype: ctype,
          } as WordsSelected;
          mutate({ id: Number(id), userWord: data });

          mutateWordExp({
            currentSentense: formSentense(sentence.sentense_words),
            topic: "",
            word: formWordPhrase(word.phrase),
            nextSentense: formSentense(
              transcript[sentence.sentense_id + 1].sentense_words
            ),
            perviousSentense: formSentense(
              transcript[sentence.sentense_id - 1].sentense_words
            ),
            content_type: ctype,
            content_id: Number(id),
          });
          // addOrUpdateWordById({ wordSelected: data }); //TODO: add word in indexeddb storage

          addSelectedWord({ wid: word?.phrase.wid });
        }
      }
    },
    [player, words]
  );

  const isActiveSentence = React.useCallback(
    (sentence: Sentense) => {
      return activeCues.some(
        (cue) =>
          cue.startTime === sentence.start_time_sec &&
          cue.endTime === sentence.end_time_sec
      );
    },
    [activeCues]
  );
  return (
    <ScrollShadow
      as={"div"}
      style={{ resize: "vertical" }}
      className="flex justify-center container  items-center  w-[650px]"
    >
      <Virtuoso
        useWindowScroll
        className="h-screen"
        style={{ width: 600, overflow: "hidden" }}
        data={transcript}
        itemContent={(index: number, sentence: Sentense) => {
          const isActive = isActiveSentence(sentence);
          return (
            <div
              className={` p-1 text-lg text-center ${
                isActive ? "font-semibold bg-zinc-400 rounded-md" : ""
              }`}
              ref={isActive ? activeRef : null}
            >
              <p className="text-black  p-3 select-none underline-offset-1 ">
                {sentence.sentense_words.map((word, wordIndex) => {
                  return (
                    <span
                      key={`${sentence.sentense_id}-${wordIndex}`}
                      className={`${
                        words.some(
                          (item) =>
                            item?.wid === word?.word?.wid ||
                            item?.wid === word?.phrase?.wid
                        )
                          ? "text-blue-500 font-semibold "
                          : word.text === " "
                          ? ""
                          : "hover:bg-blue-400"
                      } cursor-pointer p-2 px-[0.5px] rounded`}
                      onClick={() => {
                        handleWordClick(word, sentence);
                      }}
                    >
                      {word?.phrase?.wid
                        ? word.phrase?.content.map((phrase, index) => {
                            return (
                              <span key={index}>
                                {phrase?.word?.text || phrase?.text}
                              </span>
                            );
                          })
                        : word?.word?.text || word?.text}
                    </span>
                  );
                })}
              </p>
            </div>
          );
        }}
      />
    </ScrollShadow>
  );
};

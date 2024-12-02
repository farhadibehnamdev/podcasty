import type { Sentense, SentenseWords } from "@/types/episode.interface";
import { ScrollShadow } from "@nextui-org/react";
import {
  useActiveTextCues,
  useActiveTextTrack,
  useMediaPlayer,
} from "@vidstack/react";
import React from "react";
import { Virtuoso } from "react-virtuoso";
import { useUserSelectedWordStore } from "@/stores/word-selected.store";
export const Transcript = ({ transcript }: { transcript: Sentense[] }) => {
  const activeTextTrack = useActiveTextTrack("captions");
  const activeCues = useActiveTextCues(activeTextTrack);
  const player = useMediaPlayer();
  const [allCues, setAllCues] = React.useState<VTTCue[]>([]);
  const activeRef = React.useRef<HTMLDivElement>(null);
  const { addSelectedWord, words } = useUserSelectedWordStore((state) => state);

  React.useEffect(() => {
    console.log("words :: ", words);
  }, [words]);
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
    (word: SentenseWords) => {
      console.log("phrase :: ", word.phrase);
      console.log("phrase :: ", word?.word?.wid);
      console.log("handleWordClick");
      if (player) {
        if (word?.word?.wid) {
          player.pause();
          addSelectedWord(word);
          // addOrUpdateWordById(word.wid, word.text); //TODO: add word in indexeddb storage
        } else if (word?.phrase?.wid) {
          player.pause();
          addSelectedWord(word);
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
      style={{ resize: "vertical", overflow: "hidden" }}
      className="flex justify-center container  items-center  border rounded-lg w-[600px]"
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
              {/* //TODO:change wordIndex to id */}
              <p className="text-black  p-3">
                {sentence.sentense_words.map((word, wordIndex) => {
                  console.log("tes :: ", word);
                  return (
                    <span
                      key={`${sentence.sentense_id}-${wordIndex}`}
                      className={`${
                        words.some(
                          (item) =>
                            item?.word?.wid === word?.word?.wid &&
                            item?.phrase?.wid === word.phrase?.wid
                        )
                          ? "bg-blue-400"
                          : ""
                      } cursor-pointer p-2 hover:bg-blue-400 px-[0.5px] rounded`}
                      onClick={() => handleWordClick(word)}
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

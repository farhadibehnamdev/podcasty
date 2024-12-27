import { useContentDetails } from "@/hooks/useContentDetails";
import { useSyncUserWord } from "@/hooks/useSyncUserWord";
import { useWordSelection } from "@/hooks/useWordSelection";
import { useUserSelectedWordStore } from "@/stores/word-selected.store";
import { ScrollShadow } from "@nextui-org/react";
import { useActiveTextCues, useActiveTextTrack } from "@vidstack/react";
import React, { useContext, useRef } from "react";
import { Virtuoso } from "react-virtuoso";
import { Sentence } from "./sentence";
import { DrawerContext } from "@/context";
import { Sentense } from "@/types/episode.interface";

export const Transcript = ({ transcript }: { transcript: Sentense[] }) => {
  const { contentType, contentId } = useContentDetails();
  const activeTextTrack = useActiveTextTrack("captions");
  const activeCues = useActiveTextCues(activeTextTrack);
  const activeRef = useRef<HTMLDivElement>(null);
  const { addSelectedWord } = useUserSelectedWordStore();
  const { onOpen } = useContext(DrawerContext);
  const { data: response } = useSyncUserWord(contentId);
  const { handleWordClick } = useWordSelection(
    contentType,
    contentId,
    transcript,
    addSelectedWord,
    onOpen
  );

  const setAllCues = React.useState<VTTCue[]>([])[1];

  // Sync selected words from the response
  React.useEffect(() => {
    if (response?.data) {
      response.data.forEach((element: any) => {
        addSelectedWord({ wid: element.word_id });
      });
    }
  }, [response, addSelectedWord]);

  // Set all cues when the text track is loaded
  React.useEffect(() => {
    if (activeTextTrack && activeTextTrack.cues) {
      setAllCues(Array.from(activeTextTrack.cues) as VTTCue[]);
    }
  }, [activeTextTrack, setAllCues]);

  // Auto-scroll to the active cue
  React.useEffect(() => {
    if (activeCues.length > 0 && activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeCues]);

  // Determine if a sentence is active based on active cues
  const isActiveSentence = React.useCallback(
    (sentence: Sentense) =>
      activeCues.some(
        (cue) =>
          cue.startTime === sentence.start_time_sec &&
          cue.endTime === sentence.end_time_sec
      ),
    [activeCues]
  );

  return (
    <ScrollShadow
      as="div"
      style={{ resize: "vertical" }}
      className="flex justify-center container items-center w-[650px]"
    >
      <Virtuoso
        useWindowScroll
        className="h-screen"
        style={{ width: 600, overflow: "hidden" }}
        data={transcript}
        itemContent={(index, sentence) => {
          const isActive = isActiveSentence(sentence);
          return (
            <Sentence
              key={sentence.sentense_id}
              sentence={sentence}
              isActive={isActive}
              handleWordClick={handleWordClick}
              activeRef={activeRef}
            />
          );
        }}
      />
    </ScrollShadow>
  );
};

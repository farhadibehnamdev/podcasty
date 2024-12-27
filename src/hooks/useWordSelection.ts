import React from "react";
import { useMediaPlayer } from "@vidstack/react";
import { useSetWordStatus } from "./useSetWordStatus";
import { useExplainWord } from "./useExplainWord";
import { Sentense, SentenseWords } from "@/types/episode.interface";
import { WordsSelected } from "@/types/words-selected.interface";
import { formSentense, formWordPhrase } from "@/utils/form-sentence";

export const useWordSelection = (
  contentType: string,
  contentId: number,
  transcript: Sentense[],
  addSelectedWord: (word: { wid: number }) => void,
  onOpen: () => void
) => {
  const player = useMediaPlayer();
  const mutateSetWordStatus = useSetWordStatus();
  const mutateExplainWord = useExplainWord();

  const handleWordClick = React.useCallback(
    (word: SentenseWords, sentence: Sentense) => {
      if (!player) return;

      const selectedWid = word.word?.wid || word.phrase?.wid;
      if (!selectedWid) return;

      player.pause();
      onOpen();
      addSelectedWord({ wid: selectedWid });

      const data: WordsSelected = {
        wid: selectedWid,
        sentense: formSentense(sentence.sentense_words),
        start_time: sentence.start_time_sec,
        end_time: sentence.end_time_sec,
        cid: contentId.toString(),
        ctype: contentType,
        status: "unknown",
        user_id: "0ebebe19-32c4-4384-b91b-9642dc42c080",
      };

      mutateSetWordStatus.mutate({ id: contentId, userWord: data });

      const currentSentence = formSentense(sentence.sentense_words);
      const nextSentence = transcript[sentence.sentense_id + 1]?.sentense_words
        ? formSentense(transcript[sentence.sentense_id + 1].sentense_words)
        : "";
      const previousSentence = transcript[sentence.sentense_id - 1]
        ?.sentense_words
        ? formSentense(transcript[sentence.sentense_id - 1].sentense_words)
        : "";

      mutateExplainWord.mutate({
        currentSentense: currentSentence,
        topic: "",
        word: word.word?.text || formWordPhrase(word.phrase!),
        nextSentense: nextSentence,
        perviousSentense: previousSentence,
        content_type: contentType,
        content_id: contentId,
      });

      // TODO: Add word to IndexedDB storage if needed
    },
    [
      player,
      contentId,
      contentType,
      addSelectedWord,
      onOpen,
      mutateSetWordStatus,
      mutateExplainWord,
      transcript,
    ]
  );

  return { handleWordClick };
};

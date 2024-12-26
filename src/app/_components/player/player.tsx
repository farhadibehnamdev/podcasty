"use client";
import React from "react";
import {
  MediaPlayer,
  type MediaPlayerInstance,
  MediaProvider,
  Track,
} from "@vidstack/react";
import { AudioLayout } from "./_components/layouts/audio-layout";
import useTranscriptQuery from "@/hooks/useTranscriptQuery";
import { useParams } from "next/navigation";
import { Transcript } from "../transcript/transcript";
import { LineSkeleton } from "../skeleton";

// Main Player component
export const Player = () => {
  const { id } = useParams();
  const { data, error, isFetching, isLoading } = useTranscriptQuery(Number(id));
  const player = React.useRef<MediaPlayerInstance>(null);
  const transformedContent = React.useMemo(() => {
    if (data && Array.isArray(data) && data.length > 0) {
      return {
        cues: data[0].transcript_timing.map((sentence) => ({
          startTime: sentence.start_time_sec,
          endTime: sentence.end_time_sec,
          text: sentence.sentense_words
            .map((item) => {
              const res =
                item?.word?.text === " " || item?.word?.wid
                  ? item?.word?.text
                  : item.phrase?.content.map((item) => item?.word?.text);
              return res;
            })
            .join(""),
        })),
      };
    }
  }, [data]);

  return (
    <MediaPlayer
      title="Sprite Fight"
      className="flex flex-col"
      src={data ? data[0].audio_url : ""}
      ref={player}
    >
      <MediaProvider>
        <Track
          content={transformedContent}
          label="English"
          kind="captions"
          lang="en-US"
          default
          type="json"
        />
      </MediaProvider>
      {isLoading || isFetching ? (
        <LineSkeleton />
      ) : error ? (
        "Error "
      ) : data?.[0].transcript_timing ? (
        <Transcript transcript={data[0].transcript_timing} />
      ) : (
        <LineSkeleton />
      )}
      <AudioLayout
        isLoading={isLoading}
        isFetching={isFetching}
        error={error!}
      />
    </MediaPlayer>
  );
};

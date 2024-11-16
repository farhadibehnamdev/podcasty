"use client";
import "@vidstack/react/player/styles/base.css";
import {
  MediaPlayer,
  MediaPlayerInstance,
  MediaProvider,
} from "@vidstack/react";
import { AudioLayout } from "./_components/layouts/audio-layout";
import { Transcript } from "../transcript/transcript";
import useTranscriptQuery from "@/hooks/useTranscriptQuery";
import { useParams } from "next/navigation";
import { Spinner } from "@nextui-org/react";
import React from "react";

export const Player = () => {
  const { id } = useParams();
  const { data } = useTranscriptQuery(id);
  const player = React.useRef<MediaPlayerInstance>(null);

  // React.useEffect(() => {
  //   // Subscribe for updates without triggering renders.
  //   return player.current!.subscribe(({ currentTime }) => {
  //     console.log("currentTIME :: ", currentTime);
  //   });
  // }, []);
  if (!data) return <Spinner className="container" />;
  console.log("audio_url :: ", data[0].audio_url);
  return (
    <MediaPlayer
      title="Sprite Fight"
      className="flex flex-col "
      src={data[0].audio_url}
      ref={player}
    >
      <Transcript transcript={data[0].transcript_timing} />
      <MediaProvider>
        <AudioLayout />
      </MediaProvider>
    </MediaPlayer>
  );
};

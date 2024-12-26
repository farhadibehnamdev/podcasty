import styles from "./audio-layout.module.css";

import { Controls } from "@vidstack/react";
import * as Buttons from "../buttons";
import * as Sliders from "../sliders";
import { TimeGroup } from "../time-group";

export function AudioLayout({
  isLoading,
  isFetching,
  error,
}: {
  isLoading: boolean;
  isFetching: boolean;
  error: Error;
}) {
  return (
    <>
      <Controls.Root
        className={`${styles.controls} fixed bottom-0 drop-shadow-lg flex items-center justify-center contaienr bg-zinc-300 	h-[70px] w-full `}
      >
        {isLoading || isFetching ? (
          <p className="text-center text-large font-semibold">
            Please wait to load data...
          </p>
        ) : error ? (
          "Something went wrong..."
        ) : (
          <Controls.Group className="grid grid-cols-[20%_0.5fr_auto] items-center container justify-center justify-items-center content-center align-sub h-[70px]  ">
            <Controls.Group className="flex w-fit items-between gap-3 justify-center ">
              <Buttons.TranscriptScroll />
              <Buttons.Seek>
                <Buttons.Play tooltipPlacement="top center" />
              </Buttons.Seek>
              <Buttons.Repeat />
            </Controls.Group>
            <Controls.Group className="w-full">
              <TimeGroup>
                <Sliders.Time />
              </TimeGroup>
            </Controls.Group>
          </Controls.Group>
        )}
      </Controls.Root>
    </>
  );
}

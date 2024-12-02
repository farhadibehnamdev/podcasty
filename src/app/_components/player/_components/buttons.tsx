import {
  MuteButton,
  PlayButton,
  Tooltip,
  useMediaState,
  SeekButton,
  type TooltipPlacement,
} from "@vidstack/react";
import {
  MuteIcon,
  PauseIcon,
  PlayIcon,
  QueueListIcon,
  RepeatIcon,
  SeekBackward15Icon,
  SeekForward15Icon,
  VolumeHighIcon,
  VolumeLowIcon,
} from "@vidstack/react/icons";
import { ReactNode } from "react";

export interface MediaButtonProps {
  tooltipPlacement: TooltipPlacement;
}

export const buttonClass =
  "group ring-media-focus  relative inline-flex flex justify-center items-center cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4";

export const tooltipClass =
  "animate-out fade-out slide-out-to-bottom-2 data-[visible]:animate-in data-[visible]:fade-in data-[visible]:slide-in-from-bottom-4 z-10 rounded-sm bg-black/90 px-2 py-0.5 text-sm font-medium text-white parent-data-[open]:hidden";

export function Play({ tooltipPlacement }: MediaButtonProps) {
  const isPaused = useMediaState("paused");
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <PlayButton className={buttonClass}>
          {isPaused ? (
            <PlayIcon className="w-12 h-12" />
          ) : (
            <PauseIcon className="w-12 h-12" />
          )}
        </PlayButton>
      </Tooltip.Trigger>
      <Tooltip.Content className={tooltipClass} placement={tooltipPlacement}>
        {isPaused ? "Play" : "Pause"}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

export function Seek({ children }: { children: ReactNode }) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <div
          className={`flex cursor-pointer  justify-between items-center gap-2`}
        >
          <span className={`${buttonClass} p-1`}>
            <SeekBackward15Icon className="w-8 h-8" />
          </span>
          {children}
          <span className={`${buttonClass} p-1`}>
            <SeekForward15Icon className="w-8 h-8" />
          </span>
        </div>
      </Tooltip.Trigger>
    </Tooltip.Root>
  );
}

export function Repeat() {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <SeekButton className="flex justify-between items-center ">
          <RepeatIcon className="h-8 w-8" />
        </SeekButton>
      </Tooltip.Trigger>
    </Tooltip.Root>
  );
}

export function TranscriptScroll() {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <SeekButton className="flex justify-between items-center">
          <QueueListIcon className="h-8 w-8" />
        </SeekButton>
      </Tooltip.Trigger>
    </Tooltip.Root>
  );
}

export function Mute({ tooltipPlacement }: MediaButtonProps) {
  const volume = useMediaState("volume"),
    isMuted = useMediaState("muted");
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <MuteButton className={buttonClass}>
          {isMuted || volume == 0 ? (
            <MuteIcon className="w-8 h-8" />
          ) : volume < 0.5 ? (
            <VolumeLowIcon className="w-8 h-8" />
          ) : (
            <VolumeHighIcon className="w-8 h-8" />
          )}
        </MuteButton>
      </Tooltip.Trigger>
      <Tooltip.Content className={tooltipClass} placement={tooltipPlacement}>
        {isMuted ? "Unmute" : "Mute"}
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

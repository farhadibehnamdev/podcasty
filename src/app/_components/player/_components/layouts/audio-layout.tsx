import styles from "./audio-layout.module.css";

import { Controls } from "@vidstack/react";

import * as Buttons from "../buttons";
import * as Menus from "../menus";
import * as Sliders from "../sliders";
import { TimeGroup } from "../time-group";
import { Title } from "../title";

export function AudioLayout() {
  return (
    <>
      <Controls.Root
        className={`${styles.controls} fixed bottom-0  bg-gradient-to-r from-[#C0C0C0] to-[#8E8E8E] h-[80px] w-full `}
      >
        <div className="flex-1" />
        <Controls.Group className="flex w-full items-center px-2">
          <Sliders.Time />
        </Controls.Group>
        <Controls.Group className="-mt-0.5 flex w-full items-center px-2 pb-2">
          <Buttons.Play tooltipPlacement="top start" />
          <Buttons.Mute tooltipPlacement="top" />
          <Sliders.Volume />
          <TimeGroup />
          <Title />
          <div className="flex-1" />
          <Menus.Settings placement="top end" tooltipPlacement="top" />
        </Controls.Group>
      </Controls.Root>
    </>
  );
}

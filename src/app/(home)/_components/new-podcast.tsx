"use client";
import { Slider } from "@/app/_components/carousel/slider";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 2;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const NewPodcast: React.FC = () => {
  return (
    <>
      <Slider slides={SLIDES} options={OPTIONS} />
    </>
  );
};
export default NewPodcast;

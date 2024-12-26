import { Host } from "./podcasts.interface";

export type CarouselProps = {
  categoryTitle: string;
  slides: number;
  data: Array<Host>;
};

export type ArrowButtonProps = {
  onClick: () => void;
  disabled: boolean;
  children?: React.ReactNode;
};

export type CarouselApi = {
  scrollTo: (index: number) => void;
  scrollSnapList: () => number[];
  selectedScrollSnap: () => number;
  on: (event: string, callback: (api: CarouselApi) => void) => CarouselApi;
};

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

import { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
export const useDotButton = (carouselApi: EmblaCarouselType) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!carouselApi) return;
      carouselApi.scrollTo(index);
    },
    [carouselApi]
  );

  const onInit = useCallback((carouselApi: EmblaCarouselType) => {
    setScrollSnaps(carouselApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((carouselApi: EmblaCarouselType) => {
    setSelectedIndex(carouselApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    onInit(carouselApi);
    onSelect(carouselApi);
    carouselApi
      .on("reInit", onInit)
      .on("reInit", onSelect)
      .on("select", onSelect);
  }, [carouselApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

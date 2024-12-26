import { CarouselApi } from "@/types/carousel.type";
import { useCallback, useEffect, useState } from "react";

export const useDotButton = (carouselApi: CarouselApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!carouselApi) return;
      carouselApi.scrollTo(index);
    },
    [carouselApi]
  );

  const onInit = useCallback((carouselApi: CarouselApi) => {
    setScrollSnaps(carouselApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((carouselApi: CarouselApi) => {
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

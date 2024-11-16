import React, { useCallback, useEffect, useState } from "react";

export const useDotButton = (carouselApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!carouselApi) return;
      carouselApi.scrollTo(index);
    },
    [carouselApi]
  );

  const onInit = useCallback((carouselApi) => {
    setScrollSnaps(carouselApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((carouselApi) => {
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

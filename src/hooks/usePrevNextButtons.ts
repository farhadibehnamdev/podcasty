import { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (carouselApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!carouselApi) return;
    carouselApi.scrollPrev();
  }, [carouselApi]);

  const onNextButtonClick = useCallback(() => {
    if (!carouselApi) return;
    carouselApi.scrollNext();
  }, [carouselApi]);

  const onSelect = useCallback((carouselApi) => {
    setPrevBtnDisabled(!carouselApi.canScrollPrev());
    setNextBtnDisabled(!carouselApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    onSelect(carouselApi);
    carouselApi.on("reInit", onSelect).on("select", onSelect);
  }, [carouselApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

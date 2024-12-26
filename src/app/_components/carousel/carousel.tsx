"use client";

import React from "react";
import styles from "./carousel.module.css";
import { PrevButton, NextButton } from "./carousel-arrow-buttons";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "@/hooks/usePrevNextButtons";
import { Image, Spacer } from "@nextui-org/react";
import Link from "next/link";
import { CarouselProps } from "@/types/carousel.type";
import { EmblaCarouselType } from "embla-carousel";
const options = { slidesToScroll: 1 };
const Carousel = (props: CarouselProps) => {
  const { categoryTitle, data } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi as EmblaCarouselType);

  return (
    <section className={styles.embla}>
      <h1 className="text-xl font-semibold text-zinc-800 mb-5">
        {categoryTitle}
      </h1>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {data.map((item) => (
            <div className={styles.embla__slide} key={item.id}>
              <div className={`${styles.embla__slide__number}`}>
                <Link
                  href={`host/${item.slug}/episodes`}
                  className="flex flex-col justify-center items-center"
                >
                  <Image
                    isBlurred
                    className="rounded-md w-28 mb-5"
                    src={item.image_url}
                    alt={item.title}
                  />
                  <div>
                    <p className="text-center text-tiny">{item.title}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Spacer y={12} />
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default Carousel;

import { Image } from "@nextui-org/react";
import styles from "./slider.module.css";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
type options = {
  loop: boolean;
};
type SliderProp = {
  slides: number[];
  options: options;
};
export const Slider = (props: SliderProp) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={`${styles.embla__slide__number}`}>
                <div className="flex justify-center items-center gap-10 w-fit ">
                  <div className="flex flex-col justify-center items-center mb-10">
                    <h2 className="font-semibold">The Daily</h2>
                    <p className="text-2xl">Listen to this economic podcast</p>
                    <p className="text-xl">one of the popular podcasts</p>
                  </div>
                  <Image
                    className="w-1/2"
                    alt="test"
                    src="https://xdsqniswbvyacebjropq.supabase.co/storage/v1/object/sign/podcast-media/podcast-images/the-daily.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb2RjYXN0LW1lZGlhL3BvZGNhc3QtaW1hZ2VzL3RoZS1kYWlseS5qcGciLCJpYXQiOjE3MzEzMTk1ODMsImV4cCI6MTc2Mjg1NTU4M30.kUSMA691lRQWi7gd7ZUm1jp26jJXgHZn9-g0sBx1qvc&t=2024-11-11T10%3A06%3A23.973Z"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";
import Carousel from "@/app/_components/carousel/carousel";
import { usePodcastsQuery } from "@/hooks/usePodcastsQuery";
import { ExplorePodcasts } from "@/types/podcasts.interface";
import { Spinner } from "@nextui-org/react";

const PodcastHost: React.FC = () => {
  const { data: podcasts } = usePodcastsQuery();
  if (!podcasts)
    return (
      <Spinner color="current" className="flex justify-center items-center" />
    );
  return (
    <>
      {podcasts?.map((item: ExplorePodcasts) => {
        return (
          <Carousel
            key={item.category_id}
            categoryTitle={item.category_name}
            slides={item.hosts.count}
            data={item.hosts.data}
          />
        );
      })}
    </>
  );
};

export default PodcastHost;

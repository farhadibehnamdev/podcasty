"use client";
import { Rating } from "@/app/_components/rating/rating";
import usePodcastHost from "@/hooks/usePodcastHostQuery";
import { Button, Card, Listbox, ListboxItem, Spinner } from "@nextui-org/react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

const getShortDescription = (desc: string): string => {
  const shorter = desc.substring(1, 250) + "...";
  return shorter;
};

const PodcasterEpisodes = () => {
  const { slug } = useParams();
  const router = useRouter();
  const { data } = usePodcastHost({ param_slug: slug });
  if (!data) return <Spinner className="flex justify-center items-center" />;
  return (
    <>
      <div className="p-4 ">
        <Card className="w-full max-w-6xl shadow-none border-2 border-zinc-300 mb-10">
          <div className="flex flex-col md:flex-row gap-6 p-5">
            <div className="w-full md:w-1/3">
              <Image
                src={data.image_url}
                alt={data.title}
                className="object-cover rounded-md w-full h-auto"
                width={300}
                height={300}
              />
              <Button>Latest Episodes</Button>
            </div>
            <div className="flex flex-col justify-first w-full md:w-2/3">
              <h2 className="text-xl font-bold mb-4">{data.title}</h2>
              <div className="mb-4">{data.creator}</div>
              <div className="flex justify-first gap-3 items-center mb-4">
                <div className="flex">
                  <Rating />
                  <Rating />
                  <Rating />
                  <Rating />
                </div>
                <span>4</span>
              </div>
              <div className="leading-loose">
                <p className="mb-2"> {getShortDescription(data.description)}</p>
                <Button size="sm" variant="solid" color="primary">
                  Show More
                </Button>
              </div>
            </div>
          </div>
        </Card>
        <Button
          color="default"
          className="text-2xl mb-2 font-semibold"
          variant="light"
        >
          Episodes
        </Button>
        <Card className="w-full max-w-6xl shadow-none border-2 border-zinc-300">
          <div className="flex flex-col md:flex-row gap-6 p-5">
            <Listbox variant="flat">
              {data.episodes.data.map((episode) => {
                return (
                  <ListboxItem
                    onPress={() =>
                      router.push(`/podcast/${data.creator}/${episode.id}`)
                    }
                    showDivider
                    key={episode.id}
                  >
                    <div className="flex justify-between items-center gap-20">
                      <div>
                        <p className="mb-4">
                          {episode.published_date?.toString()}
                        </p>
                        <h2 className="mb-4 text-xl">{episode.title}</h2>
                        <p>{episode.description}</p>
                      </div>
                      <div>{episode.duration}</div>
                    </div>
                  </ListboxItem>
                );
              })}
            </Listbox>
          </div>
        </Card>
      </div>
    </>
  );
};

export default PodcasterEpisodes;

import { EpisodeItemType } from "@/types/podcaster-episode-item.type";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const EpisodeItem = ({
  episodes: { episodes, creator },
}: {
  episodes: EpisodeItemType;
}) => {
  const router = useRouter();
  return (
    <Listbox variant="flat">
      {episodes.data.map((episode) => {
        return (
          <ListboxItem
            onPress={() => router.push(`/podcast/${episode.id}`)}
            showDivider
            key={episode.id}
          >
            <div className="flex justify-between items-center gap-20">
              <div>
                <p className="mb-4">{episode.published_date?.toString()}</p>
                <h2 className="mb-4 text-xl">{episode.title}</h2>
                <p>{episode.description}</p>
              </div>
              <div>{episode.duration}</div>
            </div>
          </ListboxItem>
        );
      })}
    </Listbox>
  );
};

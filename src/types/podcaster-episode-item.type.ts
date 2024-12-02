import { PodcastHost } from "./podcastHost.interface";

export type EpisodeItemType = Pick<PodcastHost, "episodes" | "creator">;

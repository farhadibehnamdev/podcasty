export interface Episode {
  id: string;
  podcast_id: string;
  title: string;
  duration: number;
  description: string;
  published_date: Date;
}

export interface Episodes {
  count: number;
  data: Episode[];
}

export interface PodcastHost {
  title: string;
  creator: string;
  description: string;
  image_url: string;
  episodes: Episodes;
}

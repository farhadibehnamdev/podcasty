export interface Host {
  image_url: string;
  title: string;
  id: string;
}
export interface Hosts {
  count: number;
  data: Host[];
}
export interface ExplorePodcasts {
  category_id: string;
  category_name: string;
  hosts: Hosts;
}

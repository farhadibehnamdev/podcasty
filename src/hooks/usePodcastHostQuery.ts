import { API_KEY, API_URL } from "@/configs/globals";
import { createData } from "@/core/http-service";
import { PodcastHost } from "@/types/podcastHost.interface";
import { useQuery } from "@tanstack/react-query";
import { RawAxiosRequestHeaders } from "axios";

type GetPodcastHost = {
  param_slug: string;
};

const getPodcastHost = async (param_slug: GetPodcastHost) => {
  const url = `${API_URL}/rpc/get_podcasthost`;
  const headers: RawAxiosRequestHeaders = {
    Authorization: `Bearer ${API_KEY}`,
    apiKey: API_KEY,
  };
  const response = await createData<GetPodcastHost, PodcastHost>(
    url,
    { ...param_slug },
    headers
  );
  return response;
};

const usePodcastHost = (param_slug: GetPodcastHost) => {
  return useQuery<PodcastHost>({
    queryKey: ["podcasthost", param_slug],
    queryFn: () => getPodcastHost(param_slug),
  });
};

export default usePodcastHost;

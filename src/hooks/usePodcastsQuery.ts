import { API_KEY, API_URL } from "@/configs/globals";
import { readData } from "@/core/http-service";
import { ExplorePodcasts } from "@/types/podcasts.interface";
import { useQuery } from "@tanstack/react-query";
import { RawAxiosRequestHeaders } from "axios";

const getPodcasts = async () => {
  const url = `${API_URL}/rpc/get_podcasts`;
  const headers: RawAxiosRequestHeaders = {
    Authorization: `Bearer ${API_KEY}`,
    apiKey: API_KEY,
  };
  const response = await readData<ExplorePodcasts[]>(url, headers);
  return response;
};

export const usePodcastsQuery = () => {
  return useQuery({
    queryKey: ["podcasts"],
    queryFn: getPodcasts,
  });
};

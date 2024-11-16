import { API_KEY, API_URL } from "@/configs/globals";
import { createData } from "@/core/http-service";
import { EpisodeData } from "@/types/episode.interface";
import { useQuery } from "@tanstack/react-query";
import { RawAxiosRequestHeaders } from "axios";
type EpisodeId = {
  param_episodeid: string;
};

const getEpisodeData = async (param_episodeid: EpisodeId) => {
  const url = `${API_URL}/rpc/get_episodedata`;
  const headers: RawAxiosRequestHeaders = {
    Authorization: `Bearer ${API_KEY}`,
    apiKey: API_KEY,
  };
  const response = await createData<EpisodeId, EpisodeData[]>(
    url,
    { ...param_episodeid },
    headers
  );
  return response;
};

const useTranscriptQuery = (id: string) => {
  return useQuery<EpisodeData[]>({
    queryKey: ["transcript", "episode", id],
    queryFn: () => getEpisodeData({ param_episodeid: id }),
  });
};

export default useTranscriptQuery;

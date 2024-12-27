import { API_KEY, API_LOCAL, API_PRODUCTION_EDGE } from "@/configs/globals";
import { readData } from "@/core/http-service";
import { UserWords } from "@/core/models/user-words";
import { WordSelected } from "@/stores/word-selected.store";
import { useQuery } from "@tanstack/react-query";
import { RawAxiosRequestHeaders } from "axios";
interface UserSyncWords {
  data: UserWords[];
}
export const getSyncedWords = async (id: number) => {
  const url = `${API_PRODUCTION_EDGE}/word-status/${id}`;
  const headers: RawAxiosRequestHeaders = {
    Authorization: `Bearer ${API_KEY}`,
    apiKey: API_KEY,
  };
  const response = await readData<UserSyncWords>(url, headers);
  return response;
};

export const useSyncUserWord = (id: number) => {
  return useQuery<UserSyncWords>({
    queryKey: ["sync-word-status", id],
    queryFn: () => getSyncedWords(id),
    staleTime: Infinity,
  });
};

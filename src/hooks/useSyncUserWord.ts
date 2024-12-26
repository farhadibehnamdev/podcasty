import { API_KEY, API_LOCAL } from "@/configs/globals";
import { readData } from "@/core/http-service";
import { UserWords } from "@/core/models/user-words";
import { useQuery } from "@tanstack/react-query";
import { RawAxiosRequestHeaders } from "axios";
export const getSyncedWords = async (id: number) => {
  const url = `${API_LOCAL}/word-status/${id}`;
  const headers: RawAxiosRequestHeaders = {
    Authorization: `Bearer ${API_KEY}`,
    apiKey: API_KEY,
  };
  const response = await readData<UserWords[]>(url, headers);
  return response.data;
};

export const useSyncUserWord = (id: number) => {
  return useQuery<UserWords[]>({
    queryKey: ["sync-word-status", id],
    queryFn: () => getSyncedWords(id),
    staleTime: Infinity,
  });
};

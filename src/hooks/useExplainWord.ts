import { API_KEY, API_LOCAL, API_PRODUCTION_EDGE } from "@/configs/globals";
import { createData } from "@/core/http-service";
import { queryClient } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { RawAxiosRequestHeaders } from "axios";

interface RequestWordExplanation {
  perviousSentense: string;
  word: string;
  currentSentense: string;
  nextSentense: string;
  topic: string;
  content_type: string;
  content_id: number;
}

interface ResponseWordExplanation {
  explain: string;
  examples: string[];
}

const getWordMeaning = async (requestWord: RequestWordExplanation) => {
  const url = `${API_PRODUCTION_EDGE}/explain/word`;
  const headers: RawAxiosRequestHeaders = {
    Authorization: `Bearer ${API_KEY}`,
    apiKey: API_KEY,
  };
  const response = await createData<
    RequestWordExplanation,
    ResponseWordExplanation
  >(url, requestWord, headers);
  return response.data;
};

export const useExplainWord = () => {
  return useMutation({
    mutationKey: ["word-explain"],
    mutationFn: (requestWord: RequestWordExplanation) =>
      getWordMeaning(requestWord),
  });
};

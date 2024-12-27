import { API_KEY, API_PRODUCTION_EDGE } from "@/configs/globals";
import { createData } from "@/core/http-service";
import { WordsSelected } from "@/types/words-selected.interface";
import { useMutation } from "@tanstack/react-query";
import { RawAxiosRequestHeaders, RawAxiosResponseHeaders } from "axios";

interface SetWordStatusParams {
  id: number;
  userWord: WordsSelected;
}
interface UserWordType {
  // Renamed from UserWordsType for consistency
  userWord: WordsSelected;
}

const setWordStatus = async ({ id, userWord }: SetWordStatusParams) => {
  const url = `${API_PRODUCTION_EDGE}/word-status/${id}`;
  const headers: RawAxiosRequestHeaders = {
    Authorization: `Bearer ${API_KEY}`,
    apiKey: API_KEY,
  };

  const response = await createData<UserWordType, RawAxiosResponseHeaders>(
    url,
    {
      userWord: {
        ...userWord,
        status: "unknown",
        user_id: "0ebebe19-32c4-4384-b91b-9642dc42c080",
      },
    },
    headers
  );
  return response;
};

export const useSetWordStatus = () => {
  return useMutation({
    mutationFn: (params: SetWordStatusParams) => setWordStatus(params),
  });
};

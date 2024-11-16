import { API_KEY, API_URL } from "@/configs/globals";
import { readData } from "@/core/http-service";
import { useQuery } from "@tanstack/react-query";
import { RawAxiosRequestHeaders } from "axios";

export interface Category {
  id: string;
  name: string;
}

const getCategories = async () => {
  const url = `${API_URL}/categories?select=*`;
  const headers: RawAxiosRequestHeaders = {
    Authorization: `Bearer ${API_KEY}`,
    apiKey: API_KEY,
  };
  const response = await readData<Category[]>(url, headers);
  return response;
};

export const useCategoriesQuery = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};

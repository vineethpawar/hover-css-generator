import { ENDPOINTS } from "@/utils/config";
import axios, { AxiosError, AxiosResponse } from "axios";

const githubService = {
  githubRepoStars: async (): Promise<number> => {
    return axios
      .get(ENDPOINTS.githubRepo)
      ?.then((resp: AxiosResponse<IGithubRepoResponse>) => {
        return resp?.data?.stargazers_count;
      })
      ?.catch((err: AxiosError) => {
        console.error("API Error:", err);
        throw err;
      });
  },
};

export default githubService;

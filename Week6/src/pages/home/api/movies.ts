import { instance } from "../../../shared/api/instance";
import { ENDPOINTS } from "../../../shared/api/endpoints";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

interface DiscoverMoviesResponse {
  results: Movie[];
  total_pages: number;
}

interface DiscoverMoviesParams {
  pageParam: number;
  voteGte?: number;
  voteLte?: number;
}

export const getDiscoverMovies = async ({ pageParam, voteGte, voteLte }: DiscoverMoviesParams) => {
  const { data } = await instance.get<DiscoverMoviesResponse>(ENDPOINTS.discover, {
    params: {
      page: pageParam,
      "vote_average.gte": voteGte,
      "vote_average.lte": voteLte,
    },
  });
  return data;
};

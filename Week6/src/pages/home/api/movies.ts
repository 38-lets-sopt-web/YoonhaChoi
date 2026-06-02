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

export const getDiscoverMovies = async ({ pageParam }: { pageParam: number }) => {
  const { data } = await instance.get<DiscoverMoviesResponse>(ENDPOINTS.discover, {
    params: { page: pageParam },
  });
  return data;
};

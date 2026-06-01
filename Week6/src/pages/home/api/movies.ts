import { instance } from "../../../shared/api/instance";
import { ENDPOINTS } from "../../../shared/api/endpoints";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

export const getDiscoverMovies = async () => {
  const { data } = await instance.get<{ results: Movie[] }>(ENDPOINTS.discover);
  return data.results;
};

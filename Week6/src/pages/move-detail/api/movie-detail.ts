import { instance } from "../../../shared/api/instance";
import { ENDPOINTS } from "../../../shared/api/endpoints";
import type { MovieDetail } from "../types";

export const getMovieDetail = async (movieId: number) => {
  const { data } = await instance.get<MovieDetail>(ENDPOINTS.detail(movieId));
  return data;
};

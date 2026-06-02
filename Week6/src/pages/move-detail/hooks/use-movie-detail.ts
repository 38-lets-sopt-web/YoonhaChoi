import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "../api/movie-detail";
import { QUERY_KEY } from "../../../shared/api/query-keys";

export const useMovieDetail = (movieId: number) =>
  useQuery({
    queryKey: QUERY_KEY.MOVIE_DETAIL(movieId),
    queryFn: () => getMovieDetail(movieId),
  });

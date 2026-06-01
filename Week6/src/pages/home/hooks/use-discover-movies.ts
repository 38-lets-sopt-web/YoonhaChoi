import { useQuery } from "@tanstack/react-query";
import { getDiscoverMovies } from "../api/movies";
import { QUERY_KEY } from "../../../shared/api/query-keys";

export const UseDiscoverMovies = () =>
  useQuery({
    queryKey: QUERY_KEY.MOVIE_LIST,
    queryFn: getDiscoverMovies,
  });

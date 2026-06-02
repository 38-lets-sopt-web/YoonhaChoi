import { useInfiniteQuery } from "@tanstack/react-query";
import { getDiscoverMovies } from "../api/movies";
import { QUERY_KEY } from "../../../shared/api/query-keys";

export const useDiscoverMovies = () =>
  useInfiniteQuery({
    queryKey: QUERY_KEY.MOVIE_LIST,
    queryFn: getDiscoverMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      allPages.length < lastPage.total_pages ? allPages.length + 1 : undefined,
  });

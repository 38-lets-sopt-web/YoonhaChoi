import { useInfiniteQuery } from "@tanstack/react-query";
import { getDiscoverMovies } from "../api/movies";
import { QUERY_KEY } from "../../../shared/api/query-keys";

export const useDiscoverMovies = (options: { voteGte?: number; voteLte?: number } = {}) =>
  useInfiniteQuery({
    queryKey: [...QUERY_KEY.MOVIE_LIST, options],
    queryFn: ({ pageParam }) => getDiscoverMovies({ pageParam, ...options }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      allPages.length < lastPage.total_pages ? allPages.length + 1 : undefined,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
